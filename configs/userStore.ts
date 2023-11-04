import { db } from 'configs/firebase';
import { Store, registerInDevtools } from 'pullstate';
import { doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';
import { User, updateProfile } from 'firebase/auth';

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

export const createUser = async (user: User, displayName: string) => {
	try {
		const userDoc = doc(db, 'users', user.uid);
		updateProfile(user, {
			displayName: displayName,
		});

		const docRef = await setDoc(userDoc, {
			uid: user.uid,
			displayName: displayName,
			registeredEvent: {
				checkedIn: false,
			},
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
		store.registeredEvent.checkedIn = data.registeredEvent.checkedIn;
	});

	onSnapshot(userDoc, (doc) => {
		UserStore.update((store) => {
			store.registeredEvent.checkedIn = doc.data()?.registeredEvent.checkedIn;
		});
	});
};
