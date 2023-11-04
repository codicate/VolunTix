import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "app/stylesScreen";
import volunteeringData from "assets/server/events.json";
import { StatusBar } from "expo-status-bar";

import { Card, Icon } from "@rneui/themed";

const EventsPage = () => {
	const router = useRouter();
	const { eventid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push("/events");
	};

	const handleVolunteerButtonClick = () => {
		console.log(eventid);
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
			<View style={styles.container}>
				<Card containerStyle={styles.eventCard}>
					<Card.Image
						source={{ uri: currentVolunteering.image }}
						style={styles.image}
					/>
					<View style={styles.locationPointsContainer}>
						<Card.Title style={styles.location}>
							{currentVolunteering.location}
						</Card.Title>
						<View style={styles.pointsContainer}>
							<Icon name="star" type="font-awesome" color="#f50" />
							<Text>{currentVolunteering.points}</Text>
						</View>
					</View>
					<Card.Divider />
					<Text style={styles.description}>{currentVolunteering.text}</Text>
				</Card>
				<TouchableOpacity
					style={styles.volunteerButton}
					onPress={handleVolunteerButtonClick}
				>
					<Text style={styles.buttonText}>Volunteer</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EventsPage;
