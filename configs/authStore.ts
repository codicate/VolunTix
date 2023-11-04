import { Store, registerInDevtools } from 'pullstate';
import {
	User,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	signOut,
} from 'firebase/auth';
import { auth } from 'configs/firebase';
import { createUser, subscribeToUser } from './userStore';

interface AuthStoreType {
	user: User | null;
	isLoggedIn: boolean;
	initialized: boolean;
}

export const AuthStore = new Store<AuthStoreType>({
	isLoggedIn: false,
	initialized: false,
	user: null,
});

registerInDevtools({ AuthStore });

onAuthStateChanged(auth, (user) => {
	AuthStore.update((store) => {
		store.user = user;
		store.isLoggedIn = user ? true : false;
		store.initialized = true;
	});
});

export const appSignIn = async (email: string, password: string) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		AuthStore.update((store) => {
			store.user = user;
			store.isLoggedIn = user ? true : false;
		});
		subscribeToUser(user.uid);
		return { user: auth.currentUser };
	} catch (e) {
		return { error: e };
	}
};

export const appSignOut = async () => {
	try {
		await signOut(auth);
		AuthStore.update((store) => {
			store.user = null;
			store.isLoggedIn = false;
		});
		return { user: null };
	} catch (e) {
		return { error: e };
	}
};

export const appSignUp = async (
	email: string,
	password: string,
	displayName: string
) => {
	try {
		// this will trigger onAuthStateChange to update the store..
		const resp = await createUserWithEmailAndPassword(auth, email, password);

		// add the displayName
		await updateProfile(resp.user, { displayName });

		AuthStore.update((store) => {
			store.user = auth.currentUser;
			store.isLoggedIn = true;
		});

		await createUser(resp.user.uid, displayName);

		return { user: auth.currentUser };
	} catch (e) {
		return { error: e };
	}
};

export const fakeSignIn = async () => {
	AuthStore.update((store) => {
		store.isLoggedIn = true;
		store.initialized = true;
	});
};
