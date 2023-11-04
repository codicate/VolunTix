import { Redirect, Stack, useRouter } from 'expo-router';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { AuthStore } from '#configs/store';

const Shop = () => {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ headerShown: true, title: 'Shop' }} />
			<Text>Shop</Text>
		</View>
	);
};
export default Shop;
