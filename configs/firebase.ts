// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCU8BhwarNcqFqnBVfyY0OrATBmk7ZAd64',
	authDomain: 'sally-1955e.firebaseapp.com',
	projectId: 'sally-1955e',
	storageBucket: 'sally-1955e.appspot.com',
	messagingSenderId: '854460489288',
	appId: '1:854460489288:web:d18e426b15086a717e427d',
};

const initAuth = () => {
	if (Platform.OS === 'web') {
		return initializeAuth(app);
	} else {
		return initializeAuth(app, {
			persistence: getReactNativePersistence(AsyncStorage),
		});
	}
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initAuth();
