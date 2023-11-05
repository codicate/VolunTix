import volunteeringData from "assets/server/events.json";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "#app/styles";
import { UserStore } from "#configs/userStore";

const Past = () => {
	const volunteering = volunteeringData;
	const completedEvents = UserStore.useState((s) => s.completedEvents);

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
				{volunteering.map(
					(event, eventid) =>
						completedEvents.find(
							(completedEvent) => completedEvent.id === eventid
						) && <PastCard key={eventid} event={event} />
				)}
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
		date: string;
		points: number;
	};
}) => (
	<View
		style={{
			flexDirection: "row",
			paddingRight: 10,
		}}
	>
		{/* <Card containerStyle={styles.pastcard}> */}
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<Image style={styles.image} source={{ uri: event.image }}></Image>
			<View style={{ flexDirection: "column" }}>
				<Text style={styles.text}>{event.title}</Text>
				<Text style={styles.date}>{event.date}</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "column",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<Text
				style={{
					fontSize: 20,
					fontFamily: "Arial",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				{event.points}
			</Text>
			<Text style={{ fontSize: 20, marginLeft: "auto", marginRight: "auto" }}>
				Points
			</Text>
		</View>
	</View>
);

export default Past;
