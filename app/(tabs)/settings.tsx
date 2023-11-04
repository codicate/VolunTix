import { Stack, useRouter } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';
import { appSignOut } from '#configs/store';
import { Button } from 'react-native-elements';
import { AuthStore } from '#configs/store';

const Shop = () => {
	const router = useRouter();
	const SignOut = async () => {
		await appSignOut();
		router.push('/signin');
	};
	const user = AuthStore.useState((s) => s.user);

	return (
		<View style={styles.screen}>
			<Stack.Screen options={{ headerShown: true, title: 'Settings' }} />
			<Text style={styles.title}>Hi {user?.displayName}!</Text>
			<Button onPress={async () => SignOut()} title="Sign Out" />
		</View>
	);
};
export default Shop;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		margin: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#2089dc',
		marginBottom: 24,
	},
});
