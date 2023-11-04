import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button, Input } from '@rneui/themed';
import { appSignUp, fakeSignIn } from '#configs/store';
import { styles } from './signin';

export default function SignUp() {
	const router = useRouter();
	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');
	const passwordRef = useRef('');

	const signUp = async () => {
		const { user } = await appSignUp(
			emailRef.current,
			passwordRef.current,
			firstNameRef.current + ' ' + lastNameRef.current
		);
		if (user) {
			router.push('/events');
		}
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>SALLY</Text>
			<Stack.Screen options={{ title: 'Sign Up', headerLeft: () => <></> }} />
			<Input
				placeholder="firstName"
				nativeID="firstName"
				onChangeText={(text) => {
					firstNameRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Input
				placeholder="lastName"
				nativeID="lastName"
				onChangeText={(text) => {
					lastNameRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
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
				title={'Sign Up'}
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
				onPress={async () => signUp()}
			/>
			<Text
				style={styles.textLink}
				onPress={() => {
					router.push('/signin');
				}}
			>
				Have an account? Sign In
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
