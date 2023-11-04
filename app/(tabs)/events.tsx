import { Redirect, Stack, useRouter } from 'expo-router';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { AuthStore } from '#configs/store';

const Events = () => {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ headerShown: true, title: 'Events' }} />
			<Text>Events</Text>
		</View>
	);
};
export default Events;
