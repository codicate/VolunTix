import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "app/stylesScreen";
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
				<Text style={styles.backButton} onPress={handleBackButtonClick}>
					Back
				</Text>
				<Text style={styles.headerText}>{currentVolunteering.title}</Text>
			</View>
			<Text>Events Page</Text>
		</View>
	);
};

export default EventsPage;
