import { Text, View } from 'react-native';
import { AuthStore } from '#configs/store';
import { Stack, useRouter } from 'expo-router';

export default function SignIn() {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ title: 'Login' }} />
			<Text
				onPress={() => {
					AuthStore.update((s) => {
						s.isLoggedIn = true;
					});
					//@ts-ignore
					router.replace('/(tabs)/home');
				}}
			>
				Login
			</Text>
			<Text
				onPress={() => {
					AuthStore.update((s) => {
						s.isLoggedIn = true;
					});
					router.push('/create-account');
				}}
			>
				Create Account
			</Text>
		</View>
	);
}
