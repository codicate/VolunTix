import { Redirect, Stack, useRouter } from "expo-router";
import {
	Button,
	Pressable,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
} from "react-native";
import eventsData from "assets/server/shop.json";
import Icon from "react-native-vector-icons/Feather";
import { Card, Divider } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "app/styles";

const Shop = () => {
	const router = useRouter();

	const events = eventsData;

	const handleCardClick = (eventid: number, itemid: number) => {
		// Handle card click
		router.push({
			pathname: `/shoppage`,
			params: { eventid: eventid, itemid: itemid },
		});
		// console.log(eventid, itemid);
	};

	return (
		<View style={{ flexDirection: "column", gap: 10, flex: 1 }}>
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
					<Text style={{ color: "gray" }}>Showing events near</Text>
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
					<Text>Search for Events</Text>
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
					gap: 1,
				}}
			>
				<Card
					containerStyle={{
						backgroundColor: "rgba(128, 128, 128, 0.3)",
						borderColor: "rgba(128, 128, 128, 0.3)",
						borderRadius: 12.5,
						width: "40%",
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
						<Text>Point Cost</Text>
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
					Events Nearby
				</Text>
			</View>
			<ScrollView>
				{events.map((event, idx) => (
					<View key={idx}>
						<TouchableOpacity onPress={() => handleCardClick(idx, 0)}>
							<Card containerStyle={styles.card} key={idx}>
								<Card.Image
									source={{ uri: event.image }}
									style={styles.card.image}
								>
									<LinearGradient
										colors={["transparent", "rgba(0, 0, 0, 0.85)"]}
										style={{ flex: 1, justifyContent: "center" }}
									>
										<Card.Title style={styles.title}>{event.title}</Card.Title>
										<Card.FeaturedSubtitle style={styles.subtitle}>
											{event.location} • 5 miles
										</Card.FeaturedSubtitle>
									</LinearGradient>
								</Card.Image>
							</Card>
						</TouchableOpacity>
						<ScrollView style={styles.carousel} horizontal={true}>
							{event.items?.map((item, index) => (
								<TouchableOpacity
									key={index}
									onPress={() => handleCardClick(idx, index + 1)}
								>
									<Card containerStyle={styles.carousal_card} key={index}>
										<Card.Image
											source={{ uri: item.image }}
											style={{ ...styles.carousal_card.image }}
										/>
									</Card>
								</TouchableOpacity>
							))}
						</ScrollView>
						{idx !== events.length - 1 && (
							<Divider
								width={2}
								style={{ marginTop: 15, marginBottom: 5, marginHorizontal: 20 }}
							/>
						)}
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Shop;
