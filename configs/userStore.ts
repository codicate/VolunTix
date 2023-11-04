import { db } from 'configs/firebase';
import { Store, registerInDevtools } from 'pullstate';
import { doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';

interface UserStoreType {
	displayName: string;
	uid: string;
	registeredEvent: {
		checkedIn: boolean;
	};
}

export const UserStore = new Store<UserStoreType>({
	displayName: '',
	uid: '',
	registeredEvent: {
		checkedIn: false,
	},
});

registerInDevtools({ UserStore });

export const createUser = async (uid: string, displayName: string) => {
	try {
		const userDoc = doc(db, 'users', uid);
		const docRef = await setDoc(userDoc, {
			uid: uid,
			displayName: displayName,
			registeredEvent: {
				checkedIn: false,
			},
		});

		subscribeToUser(uid);
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
		store.registeredEvent.checkedIn = data.registeredEvent.checkedIn;
	});

	onSnapshot(userDoc, (doc) => {
		UserStore.update((store) => {
			store.registeredEvent.checkedIn = doc.data()?.registeredEvent.checkedIn;
		});
	});
};
