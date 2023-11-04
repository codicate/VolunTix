import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { AuthStore } from '#configs/authStore';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
	const segments = useSegments();
	const router = useRouter();
	const navigationState = useRootNavigationState();
	const { initialized, isLoggedIn } = AuthStore.useState();

	React.useEffect(() => {
		if (!navigationState?.key || !initialized) return;

		const inAuthGroup = segments[0] === '(auth)';
		if (
			// If the user is not signed in and the initial segment is not anything
			//  segment is not anything in the auth group.
			!isLoggedIn &&
			!inAuthGroup
		) {
			// Redirect to the login page.
			router.replace('/signin');
			console.log('not logged in');
		} else if (isLoggedIn) {
			// go to tabs root.
			//@ts-ignore
			router.replace('/(tabs)/home');
		}
	}, [segments, navigationState?.key, initialized]);

	return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
};
export default Index;
