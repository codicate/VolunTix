import { Redirect, Stack, useRouter } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { appSignOut } from '#configs/store';
import { Button } from 'react-native-elements';

const Shop = () => {
	const router = useRouter();
	const SignOut = async () => {
		await appSignOut();
		router.push('/signin');
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ headerShown: true, title: 'Settings' }} />
			<Button onPress={async () => SignOut()} title="Sign Out" />
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
