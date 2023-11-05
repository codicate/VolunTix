import { db } from "configs/firebase";
import { Store, registerInDevtools } from "pullstate";
import { doc, setDoc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { User, updateProfile } from "firebase/auth";

interface UserStoreType {
	displayName: string;
	uid: string;
	registeredEvent?: {
		id: number;
		checkedIn: boolean;
	};
}

export const UserStore = new Store<UserStoreType>({
	displayName: "",
	uid: "",
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
			registeredEvent: null,
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
		store.registeredEvent = data.registeredEvent;
	});
};

export const subscribeToUser = async (uid: string) => {
	console.log("subcribed to user changes");
	const userDoc = doc(db, "users", uid);
	const data = (await getDoc(userDoc)).data() as UserStoreType;
	updateUser(data);

	onSnapshot(userDoc, (doc) => {
		updateUser(data);
	});
};

export const registerForEvent = (user: User, id: string) => {
	UserStore.update((store) => {
		store.registeredEvent = {
			id: id as unknown as number,
			checkedIn: false,
		};
	});
	const userDoc = doc(db, "users", user.uid);
	updateDoc(userDoc, {
		registeredEvent: {
			id: id,
			checkedIn: false,
		},
	});
};
