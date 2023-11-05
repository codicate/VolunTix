import volunteeringData from "assets/server/events.json";
import { View, Image, ScrollView, Text } from "react-native";

import { ListItem, Avatar, Card } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "#app/styles";

const Past = () => {
	const volunteering = volunteeringData;

	return (
		<View
			style={{
				backgroundColor: "white",
				paddingTop: "5%",
				paddingBottom: "100%",
			}}
		>
			<ScrollView
				contentContainerStyle={{
					display: "flex",
					gap: 20,
				}}
			>
				{volunteering.map((event, eventid) => (
					<PastCard key={eventid} event={event} />
				))}
			</ScrollView>
		</View>
	);
};

export const PastCard = ({
	event,
}: {
	event: {
		image: string;
		title: string;
		location: string;
	};
}) => (
	<View
		style={{
			flexDirection: "row",
			paddingRight: 10,
		}}
	>
		{/* <Card containerStyle={styles.pastcard}> */}
		<Image style={styles.image} source={{ uri: event.image }}></Image>
		<View style={{ flexDirection: "column" }}>
			<Text style={styles.text}>{event.title}</Text>
			<Text style={styles.text}>{event.location}</Text>
			<Text style={styles.date}>16 July</Text>
		</View>
		<Text style={{ marginLeft: "auto", fontSize: 25 }}>⭐ 90</Text>
	</View>
);

export default Past;
