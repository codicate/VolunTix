import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "app/stylesScreen";
import volunteeringData from "assets/server/events.json";
import { registerForEvent } from "#configs/userStore";

import { Card } from "@rneui/themed";
import { AuthStore } from "#configs/authStore";
import Icon from "react-native-vector-icons/Feather";

const EventsPage = () => {
	const router = useRouter();
	const user = AuthStore.useState((s) => s.user);
	const [registered, setRegistered] = React.useState(false);
	const { eventid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push("/events");
	};

	const handleVolunteerButtonClick = () => {
		if (user) {
			registerForEvent(user, volunteeringData[Number(eventid)]);
			setRegistered(true);
		}
	};

	const currentVolunteering = volunteeringData[Number(eventid)];

	return (
		<View style={{ backgroundColor: "white" }}>
			<View style={{ padding: 0 }}>
				<Image
					source={{
						uri: currentVolunteering.image,
					}}
					style={{
						minWidth: "100%",
						minHeight: 10,
						width: "100%",
						height: "70%",
					}}
				></Image>
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						marginLeft: "2.5%",
						marginTop: "5%",
						paddingBottom: "5%",
						backgroundColor: "white",
					}}
				>
					<Text style={{ color: "#1a237e", fontSize: 20 }}>
						In-Person Event
					</Text>
					<Text style={{ color: "black", fontWeight: "bold", fontSize: 35 }}>
						{currentVolunteering.title}
					</Text>
					<Text style={{ marginTop: "2.5%", color: "gray", fontSize: 20 }}>
						By <u>Goodwill New York</u>
					</Text>
				</View>
				<View>
					<TouchableOpacity
						style={{
							...styles.volunteerButton,
							backgroundColor: registered ? "#888" : "#2f95dc",
						}}
						onPress={handleVolunteerButtonClick}
					>
						<Text style={styles.buttonText}>
							{registered ? "Registered" : "Volunteer"}
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "column",
						marginLeft: "5%",
						marginTop: "6%",
						gap: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Icon name="calendar" size={12.5} color="black" />
						<Text
							style={{
								color: "black",
								fontSize: 20,
								marginLeft: 10,
							}}
						>
							Nov 3
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Icon name="map-pin" size={12.5} color="black" />
						<Text
							style={{
								color: "black",
								fontSize: 20,
								marginLeft: 10,
							}}
						>
							<u>123 Example Street</u>
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: "5%",
						}}
					>
						<View
							style={{
								flexDirection: "column",
							}}
						>
							<Text
								style={{
									color: "black",
									fontWeight: "bold",
									fontSize: 20,
								}}
							>
								Event Details
							</Text>
							<Text>{currentVolunteering.text}</Text>
						</View>
					</View>
					<View
						style={{
							marginTop: "5%",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<View>
							<Icon name="plus-circle" color="blue" size={30}></Icon>
						</View>
						<View style={{ marginLeft: "2%" }}>
							<Text
								style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
							>
								Share this event
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default EventsPage;
