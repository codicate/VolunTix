import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "app/stylesScreen";
import shopData from "assets/server/shop.json";
import { Card, Icon } from "@rneui/themed";
import { AuthStore } from "#configs/authStore";
import { redeemItem } from "#configs/userStore";

const EventsPage = () => {
	const user = AuthStore.useState((s) => s.user);
	const router = useRouter();
	const { eventid, itemid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push("/shop");
	};

	const event = shopData[Number(eventid)];

	const zeroIndexItem = (itemid: any) => {
		if (Number(itemid) == 0) {
			return event;
		} else {
			return event.items[Number(itemid) - 1];
		}
	};
	const item = zeroIndexItem(itemid);
	const handleRedeemButtonClick = async (itemName: string, itemPoints: any) => {
		if (user == null) return;
		const res = await redeemItem(user, {
			itemPoints: itemPoints,
			eventid: eventid as unknown as number,
			itemid: itemid as unknown as number,
		});
		if (res) {
			router.push({
				pathname: `/redeem`,
				params: {
					eventid: eventid,
					itemid: itemid,
					itemName: itemName,
					itemPoints: itemPoints.toString(),
				},
			});
		} else {
			console.log("not enough points!");
		}
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
