import { Redirect, Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "app/stylesScreen";
import shopData from "assets/server/shop.json";
import { Card } from "@rneui/themed";
import { AuthStore } from "#configs/authStore";
import { redeemItem } from "#configs/userStore";
import Icon from "react-native-vector-icons/Feather";

const ItemPage = () => {
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
	const item = event.items[Number(itemid) - 1];
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
		<View style={{}}>
			<View style={{ padding: 0 }}>
				<Image
					source={{
						uri: item.image,
					}}
					style={{
						minWidth: "100%",
						minHeight: 10,
						width: "100%",
						height: "60%",
					}}
				></Image>
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						marginLeft: "2.5%",
						marginTop: "5%",
						paddingBottom: "5%",
					}}
				>
					<Text style={{ color: "black", fontWeight: "bold", fontSize: 35 }}>
						{item.name}
					</Text>
					<Text style={{ marginTop: "2.5%", color: "gray", fontSize: 20 }}>
						From <u>{event.title}</u>
					</Text>
				</View>
				<View></View>
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
							marginTop: "5%",
						}}
					>
						<View
							style={{
								flexDirection: "column",
								gap: 20,
							}}
						>
							<View>
								<Text style={{ fontSize: 20 }}>
									{item.points} Points To Redeem
								</Text>
							</View>
							<View>
								<Text
									style={{
										color: "black",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									Event Details
								</Text>
								<View
									style={{
										marginTop: "0.5%",
										maxWidth: "25%",
										flexWrap: "wrap",
									}}
								>
									<Text style={{}}>{item.description}</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							marginTop: "3%",
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

export default ItemPage;
