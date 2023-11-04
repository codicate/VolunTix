import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button } from '@rneui/themed';
import { appSignUp } from '#configs/store';

export default function SignUp() {
	const router = useRouter();
	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');
	const passwordRef = useRef('');

	const signUp = async () => {
		const user = await appSignUp(
			emailRef.current,
			passwordRef.current,
			firstNameRef.current + lastNameRef.current
		);
		console.log(user);
		// if (user) {
		//   router.replace('/(tabs)/home');
		// }
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Stack.Screen options={{ title: 'Sign Up', headerLeft: () => <></> }} />
			<View>
				<Text style={styles.label}>First Name</Text>
				<TextInput
					placeholder="firstName"
					nativeID="firstName"
					onChangeText={(text) => {
						firstNameRef.current = text;
					}}
					style={styles.textInput}
				/>
			</View>
			<View>
				<Text style={styles.label}>Last Name</Text>
				<TextInput
					placeholder="lastName"
					nativeID="lastName"
					onChangeText={(text) => {
						lastNameRef.current = text;
					}}
					style={styles.textInput}
				/>
			</View>
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
				title={'Sign Up'}
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
				onPress={async () => signUp()}
			/>
			<Text
				onPress={() => {
					router.push('/signin');
				}}
			>
				Have an account? Sign In
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
