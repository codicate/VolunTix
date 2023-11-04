import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import volunteeringData from "assets/server/events.json";

const EventsPage = () => {
	const router = useRouter();
	const { eventid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push("/events");
	};
	const currentVolunteering = volunteeringData[Number(eventid)];

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.headerText}>{currentVolunteering.title}</Text>
			</View>
			<Button title="Back" onPress={handleBackButtonClick} />
			<Text>Events Page</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#f8f8f8",
		padding: 10,
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
	},
});
export default EventsPage;
