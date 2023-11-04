import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button } from '@rneui/themed';
import { appSignIn, fakeSignIn } from '#configs/store';

export default function SignIn() {
	const router = useRouter();
	const emailRef = useRef('');
	const passwordRef = useRef('');

	const signIn = async () => {
		const user = await appSignIn(emailRef.current, passwordRef.current);
		console.log(user);
		if (user) {
			router.push('/events');
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ title: 'Sign In' }} />
			<View>
				<Text style={styles.label}>Email</Text>
				<TextInput
					placeholder="email"
					nativeID="email"
					onChangeText={(text) => {
						emailRef.current = text;
					}}
					style={styles.textInput}
				/>
			</View>
			<View>
				<Text style={styles.label}>Password</Text>
				<TextInput
					placeholder="password"
					secureTextEntry={true}
					nativeID="password"
					onChangeText={(text) => {
						passwordRef.current = text;
					}}
					style={styles.textInput}
				/>
			</View>
			<Button
				title={'Sign In'}
				containerStyle={{
					height: 40,
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				buttonStyle={{
					borderWidth: 2,
					borderColor: 'white',
					borderRadius: 30,
				}}
				onPress={() => {
					const user = appSignIn(emailRef.current, passwordRef.current);
					console.log(user);
					//@ts-ignore
					// router.replace('/(tabs)/home');
				}}
			/>
			<Text
				onPress={() => {
					router.push('/signup');
				}}
			>
				No account? Sign Up
			</Text>
			<Text
				onPress={() => {
					fakeSignIn();
					router.push('/events');
				}}
			>
				Developer fake sign in
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		marginBottom: 4,
		color: '#455fff',
	},
	textInput: {
		width: 250,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#455fff',
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginBottom: 8,
	},
});
