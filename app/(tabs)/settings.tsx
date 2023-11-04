import { Redirect, Stack, useRouter } from 'expo-router';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { AuthStore } from '#configs/store';

const Shop = () => {
	const router = useRouter();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ headerShown: true, title: 'Settings' }} />
			<Button
				onPress={() => {
					AuthStore.update((s) => {
						s.isLoggedIn = false;
					});
					router.replace('/login');
				}}
				title="LOGOUT"
			/>

			<Pressable
				onPress={() => {
					alert('pressed');
				}}
				style={({ pressed }) => [
					{ backgroundColor: pressed ? '#920' : '#818' },
					{
						borderColor: '#920',
						borderWidth: 1,
						borderStyle: 'solid',
						borderRadius: 8,
						paddingHorizontal: 12,
						paddingVertical: 6,
					},
				]}
			>
				<Text
					style={{
						color: 'white',
					}}
				>
					Button
				</Text>
			</Pressable>
		</View>
	);
};
export default Shop;
