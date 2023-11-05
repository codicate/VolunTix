import { db } from "configs/firebase";
import { Store, registerInDevtools } from "pullstate";
import { doc, setDoc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { User, updateProfile } from "firebase/auth";

interface UserStoreType {
	displayName: string;
	uid: string;
	points: number;
	redeemedItems: {
		eventid: number;
		itemid: number;
	}[];
	registeredEvent?: {
		id: number;
		checkedIn: boolean;
		points: number;
	};
}

export const UserStore = new Store<UserStoreType>({
	displayName: "",
	uid: "",
	points: 0,
	redeemedItems: [],
});

registerInDevtools({ UserStore });

export const createUser = async (user: User, displayName: string) => {
	try {
		const userDoc = doc(db, "users", user.uid);
		updateProfile(user, {
			displayName: displayName,
		});

		const docRef = await setDoc(userDoc, {
			uid: user.uid,
			displayName: displayName,
			points: 0,
			registeredEvent: null,
			redeemedItems: [],
		});

		subscribeToUser(user.uid);
		return { docRef: docRef };
	} catch (e) {
		return { error: e };
	}
};

const updateUser = (data: UserStoreType) => {
	UserStore.update((store) => {
		store.displayName = data.displayName;
		store.uid = data.uid;
		store.points = data.points;
		store.registeredEvent = data.registeredEvent;
	});
};

export const subscribeToUser = async (uid: string) => {
	console.log("subcribed to user changes");
	const userDoc = doc(db, "users", uid);
	const data = (await getDoc(userDoc)).data() as UserStoreType;
	updateUser(data);

	onSnapshot(userDoc, (doc) => {
		updateUser(doc.data() as UserStoreType);
	});
};

export const registerForEvent = (user: User, event: any) => {
	const newEvent = {
		id: event.eventid,
		checkedIn: false,
		points: event.points,
	};

	const userDoc = doc(db, "users", user.uid);
	updateDoc(userDoc, {
		registeredEvent: newEvent,
	});
};

interface Input {
	eventid: number;
	itemid: number;
	itemPoints: number;
}

export const redeemItem = async (user: User, input: Input) => {
	const userDoc = doc(db, "users", user.uid);
	const data = (await getDoc(userDoc)).data() as UserStoreType;

	if (data.points >= input.itemPoints) {
		updateDoc(userDoc, {
			points: data.points - input.itemPoints,
			redeemedItems: [
				...data.redeemedItems,
				{ eventid: input.eventid, itemid: input.itemid },
			],
		});
		return true;
	} else {
		return false;
	}
};
