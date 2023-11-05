import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

import React from "react";
import { Button } from "@rneui/themed";

const redeem = () => {
	const { eventId, itemId, itemName, itemPoints } = useLocalSearchParams();
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: "135%",
					height: "100%",
					position: "absolute",
					opacity: 0.05,
				}}
				source={{
					uri: "https://media.tenor.com/pkqQze73yOoAAAAC/confetti-sticker.gif",
				}}
			/>
			<Image
				source={{
					uri: "https://em-content.zobj.net/source/animated-noto-color-emoji/356/party-popper_1f389.gif",
				}}
				style={styles.image}
			/>
			<Text style={styles.text}>
				Congratulations! you have redemeed the {itemName} for {itemPoints}{" "}
				Impact Points!
			</Text>
			<Text style={styles.text}>Go to your User page to see your ticket!</Text>
			<Button style={styles.button} onPress={() => router.push("/more")}>
				<Text style={styles.buttonText}>Take me there!</Text>
			</Button>
		</View>
		// back button
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 200,
	},
	text: {
		textAlign: "center",
		marginVertical: 20,
	},
	button: {
		alignSelf: "center",
		paddingVertical: 25,
		width: "150%",
		minHeight: 50,
		borderRadius: 15,
	},
	buttonText: {
		color: "white",
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10,
	},
});

export default redeem;
