import { db } from 'configs/firebase';
import { Store, registerInDevtools } from 'pullstate';
import { doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';
import { User, updateProfile } from 'firebase/auth';

interface UserStoreType {
	displayName: string;
	uid: string;
	registeredEvent: {
		id: string;
		checkedIn: boolean;
	};
}

export const UserStore = new Store<UserStoreType>({
	displayName: '',
	uid: '',
	registeredEvent: {
		id: '',
		checkedIn: false,
	},
});

registerInDevtools({ UserStore });

export const createUser = async (user: User, displayName: string) => {
	try {
		const userDoc = doc(db, 'users', user.uid);
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

export const subscribeToUser = async (uid: string) => {
	console.log('subcribed to user changes');
	const userDoc = doc(db, 'users', uid);
	const data = (await getDoc(userDoc)).data() as UserStoreType;
	UserStore.update((store) => {
		store = data;
	});

	onSnapshot(userDoc, (doc) => {
		UserStore.update((store) => {
			store = doc.data() as UserStoreType;
		});
	});
};

export const registerForEvent = (user: User, id: string) => {
	UserStore.update((store) => {
		store.registeredEvent.id = id;
	});
	const userDoc = doc(db, 'users', user.uid);
	setDoc(userDoc, {
		registeredEvent: {
			id: id,
			checkedIn: false,
		},
	});
};
