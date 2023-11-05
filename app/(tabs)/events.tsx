import { Redirect, Stack, useRouter } from "expo-router";
import {
	Button,
	Pressable,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Card, Avatar, Chip } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "app/styles";
import Icon from "react-native-vector-icons/Feather";
import volunteeringData from "assets/server/events.json";

const Events = () => {
	// Dummy items
	const router = useRouter();
	const volunteering = volunteeringData;

	const handleCardClick = (eventid: number) => {
		// Handle card click
		// router.push(`/eventspage/${eventid}`);
		router.push({ pathname: `/eventspage`, params: { eventid: eventid } });
	};

	return (
		<View style={{ flexDirection: "column", gap: 10 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginTop: "5%",
				}}
			>
				<View
					style={{
						flexDirection: "column",
						marginLeft: "4%",
					}}
				>
					<Text style={{ color: "gray" }}>
						Showing volunteer opportunities near
					</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text>New York City, NY</Text>
						<Icon size={20} name="chevron-down" color="black" />
					</View>
				</View>
				<Icon
					size={25}
					name="filter"
					color="black"
					style={{ marginRight: "6%" }}
				/>
			</View>
			<Card
				containerStyle={{
					backgroundColor: "rgba(128, 128, 128, 0.1)",
					borderColor: "rgba(128, 128, 128, 0.1)",
					borderRadius: 12.5,
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Icon
						size={15}
						name="search"
						color="black"
						style={{ marginRight: "6%" }}
					/>
					<Text>Search for Volunter Oppurtunities</Text>
					<View
						style={{
							flex: 1,
							justifyContent: "flex-end",
							flexDirection: "row",
						}}
					>
						<Icon size={15} name="mic" color="black" />
					</View>
				</View>
			</Card>

			<View
				style={{
					flexDirection: "row",
					gap: 2.5,
				}}
			>
				<Card
					containerStyle={{
						backgroundColor: "rgba(128, 128, 128, 0.3)",
						borderColor: "rgba(128, 128, 128, 0.3)",
						borderRadius: 12.5,
						width: "25%",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							gap: 5,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text>Distance</Text>
						<Icon size={15} name="chevron-down" color="black" />
					</View>
				</Card>

				<Card
					containerStyle={{
						backgroundColor: "rgba(128, 128, 128, 0.3)",
						borderColor: "rgba(128, 128, 128, 0.3)",
						borderRadius: 12.5,
						width: "25%",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							gap: 5,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text>Type</Text>
						<Icon size={15} name="chevron-down" color="black" />
					</View>
				</Card>
			</View>

			<View>
				<Text
					style={{
						marginTop: "2%",
						marginLeft: "4%",
						fontWeight: "bold",
						fontSize: 20,
					}}
				>
					Volunteer Nearby
				</Text>
			</View>
			<ScrollView>
				{volunteering.map((event, eventid) => (
					<EventCard event={event} key={eventid} onClick={handleCardClick} />
				))}
			</ScrollView>
		</View>
	);
};

export const EventCard = ({
	event,
	onClick,
}: {
	event: any;
	onClick?: (eventid: number) => void;
}) => (
	<TouchableOpacity onPress={() => onClick?.(event.eventid)}>
		<Card containerStyle={styles.card}>
			<Card.Image source={{ uri: event.image }} style={styles.card.image}>
				<Card.Title style={styles.title}>{event.title}</Card.Title>
				<Card.FeaturedSubtitle style={styles.subtitle}>
					{event.location} • 5 miles
				</Card.FeaturedSubtitle>

				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.5)", "black"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={{ position: "absolute", bottom: 0, height: "33.33%" }}
				/>
			</Card.Image>
		</Card>
	</TouchableOpacity>
);

export default Events;
