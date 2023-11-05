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

import { Card } from "@rneui/themed";
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
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Redeem Impact Points</Text>
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
										colors={["transparent", "rgba(0,0,0,0.5)", "black"]}
										style={{ ...styles.gradient }}
									></LinearGradient>
									<Card.Title style={styles.title}>{event.title}</Card.Title>
									<Card.FeaturedSubtitle style={styles.subtitle}>
										{event.type} • {event.location}
									</Card.FeaturedSubtitle>
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
										>
											<LinearGradient
												colors={["transparent", "rgba(0,0,0,0.5)", "black"]}
												style={{ ...styles.gradient }}
											></LinearGradient>
										</Card.Image>
									</Card>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Shop;
