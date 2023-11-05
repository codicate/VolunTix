import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import { useRef } from "react";
import { Stack, useRouter } from "expo-router";
import { Button, Input } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { appSignUp, fakeSignIn } from "#configs/authStore";
import { styles } from "./signin";

export default function SignUp() {
	const router = useRouter();

	const emailRef = useRef("");
	const passwordRef = useRef("");

	const signUp = async () => {
		const { user } = await appSignUp(emailRef.current, passwordRef.current);
		if (user) {
			router.push("/onboard");
		}
	};

	return (
		<View style={styles.screen}>
			<Image
				style={{ width: "135%", height: "100%", position: "absolute" }}
				source={{
					uri: "https://media.tenor.com/8dTD4BUZfS8AAAAC/%CE%B2%CE%B5%CF%81%CF%84%CE%B7%CF%82-yton.gif",
				}}
			/>
			<Text style={styles.title}>VOLUNTIX</Text>
			<Stack.Screen options={{ title: "Sign Up", headerLeft: () => <></> }} />
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
				containerStyle={{ borderWidth: 0 }}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Button
				title={"Sign Up"}
				titleStyle={{
					color: "white",
					fontSize: 22.5,
				}}
				ViewComponent={LinearGradient}
				linearGradientProps={{
					colors: ["#4CAF50", "#2196F3"],
					start: { x: 0, y: 0.5 },
					end: { x: 1, y: 0.5 },
				}}
				containerStyle={{
					width: 200,
					marginHorizontal: 60,
					marginVertical: 10,
				}}
				buttonStyle={{
					borderWidth: 0,
					borderRadius: 12.5,
				}}
				onPress={async () => signUp()}
			/>
			<Text
				style={styles.textLink}
				onPress={() => {
					router.push("/signin");
				}}
			>
				Have an account? Sign In
			</Text>
		</View>
	);
}
