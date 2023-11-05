import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "app/stylesScreen";
import volunteeringData from "assets/server/shop.json";
import { StatusBar } from "expo-status-bar";

import { Card, Icon } from "@rneui/themed";

const EventsPage = () => {
	const router = useRouter();
	const { eventid, itemid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push("/shop");
	};

	const event = volunteeringData[Number(eventid)];

	const zeroIndexItem = (itemid: any) => {
		if (Number(itemid) == 0) {
			return event;
		} else {
			return event.items[Number(itemid) - 1];
		}
	};
	const item = zeroIndexItem(itemid);
	const handleRedeemButtonClick = (itemName: any, itemPoints: any) => {
		console.log(itemPoints);
		router.push({
			pathname: `/redeem`,
			params: {
				eventid: eventid,
				itemId: itemid,
				itemName: itemName,
				itemPoints: itemPoints.toString(),
			},
		});
	};

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.backButton} onPress={handleBackButtonClick}>
					Back
				</Text>
				<Text style={styles.headerText}>{event.title}</Text>
			</View>
			<View style={styles.container}>
				<Card containerStyle={styles.eventCard}>
					<Card.Image source={{ uri: item.image }} style={styles.image} />
					<View style={styles.locationPointsContainer}>
						<Card.Title style={styles.location}>{item.name}</Card.Title>
						<View style={styles.pointsContainer}>
							<Icon name="star" type="font-awesome" color="#f50" />
							<Text>{item.points}</Text>
						</View>
					</View>
					<Card.Divider />
					<Text style={styles.description}>{item.description}</Text>
				</Card>
				<TouchableOpacity
					style={styles.volunteerButton}
					onPress={() => handleRedeemButtonClick(item.name, item.points)}
				>
					<Text style={styles.buttonText}>Redeem</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EventsPage;
