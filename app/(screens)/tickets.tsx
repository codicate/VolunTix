import shopData from "assets/server/shop.json";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "#app/styles";
import { UserStore } from "#configs/userStore";

const Tickets = () => {
	const redeemdedItems = UserStore.useState((s) => s.redeemedItems);
	console.log(redeemdedItems);
	return (
		<View
			style={{
				backgroundColor: "white",
				paddingTop: "5%",
				flex: 1,
			}}
		>
			<ScrollView
				contentContainerStyle={{
					display: "flex",
					gap: 20,
				}}
			>
				{redeemdedItems.map(({ eventid, itemid }, idx) => {
					const event = shopData.find((event) => event.eventid == eventid);
					const item =
						itemid === 0
							? event
							: event!!.items.find((item) => item.itemid == itemid);
					if (!item) return null;
					return (
						<View key={idx} style={{ flexDirection: "row" }}>
							<Image style={styles.image} source={{ uri: item.image }}></Image>
							<View style={{ flexDirection: "column" }}>
								<Text style={styles.text}>{item.name}</Text>
								<Text style={styles.text}>{event!!.location}</Text>
								<Text style={styles.date}>Nov. 5</Text>
							</View>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default Tickets;
