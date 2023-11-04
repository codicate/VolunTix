import { Text, View, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button, Input } from '@rneui/themed';
import { appSignIn, fakeSignIn } from '#configs/store';

export default function SignIn() {
	const router = useRouter();
	const emailRef = useRef('');
	const passwordRef = useRef('');

	const signIn = async () => {
		const { user } = await appSignIn(emailRef.current, passwordRef.current);
		if (user) {
			router.push('/events');
		}
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>SALLY</Text>
			<Stack.Screen options={{ title: 'Sign In' }} />
			<Input
				placeholder="email"
				nativeID="email"
				onChangeText={(text) => {
					emailRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Input
				placeholder="password"
				secureTextEntry={true}
				nativeID="password"
				onChangeText={(text) => {
					passwordRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Button
				title={'Sign In'}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				buttonStyle={{
					borderWidth: 2,
					borderColor: 'white',
					borderRadius: 30,
				}}
				onPress={async () => signIn()}
			/>
			<Text
				style={styles.textLink}
				onPress={() => {
					router.push('/signup');
				}}
			>
				No account? Sign Up
			</Text>
			<Text
				style={styles.textLink}
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

export const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#2089dc',
		marginBottom: 24,
	},
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		margin: 'auto',
	},
	textLink: {
		color: '#2089dc',
	},
	textInput: {
		width: 250,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#2089dc',
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginBottom: 8,
	},
});
