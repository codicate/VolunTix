import { Stack, useRouter, Link } from "expo-router";
import { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { appSignOut } from "#configs/authStore";
import { Button } from "react-native-elements";
import Icon from "@expo/vector-icons/FontAwesome";
import { AuthStore } from "#configs/authStore";
import CheckIn from "#components/CheckIn";
import styles from "app/styles";
import volunteeringData from "assets/server/events.json";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Avatar } from "@rneui/themed";
import Past, { PastCard } from "#app/(screens)/past";
import Tickets from "#app/(screens)/tickets";
import { UserStore } from "#configs/userStore";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof Icon>["name"];
	color: string;
}) {
	return <Icon size={28} style={{ marginBottom: -3 }} {...props} />;
}

const More = () => {
	const router = useRouter();
	const SignOut = async () => {
		await appSignOut();
		router.push("/signin");
	};
	const [isModalVisible, setIsModalVisible] = useState(false);
	const user = AuthStore.useState((s) => s.user);

	const showCheckIn = () => {
		if (user) setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const Tab = createMaterialTopTabNavigator();
	const registeredEvent = UserStore.useState((s) => s.registeredEvent);
	console.log(registeredEvent);

	return (
		<View style={{ backgroundColor: "white" }}>
			<View style={styles.container}>
				<View style={styles.avatar}>
					<Avatar
						rounded
						size={80}
						source={{
							uri: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
						}}
					></Avatar>
				</View>

				<View style={styles.stats}>
					<View style={styles.event}>
						<Text style={styles.number}>34</Text>
						<Text style={styles.label}>Events</Text>
					</View>
					<View style={styles.points}>
						<Text style={styles.number}>120</Text>
						<Text style={styles.label}>Points</Text>
					</View>
				</View>
			</View>
			{registeredEvent && (
				<View
					style={{
						paddingTop: 10,
						display: "flex",
						alignItems: "stretch",
						gap: 10,
						backgroundColor: "#eee",
					}}
				>
					<Text
						style={{
							fontSize: 18,
							textAlign: "center",
						}}
					>
						Registered Event
					</Text>
					<PastCard event={volunteeringData[registeredEvent.id]} />
					<Button
						onPress={showCheckIn}
						title="Show Check In QR Code"
						style={{ width: 300 }}
					/>
				</View>
			)}
			<CheckIn
				isVisible={isModalVisible}
				user={user!!}
				onClose={onModalClose}
			/>

			<View style={styles.navigator}>
				<Tab.Navigator
					screenOptions={{
						tabBarShowLabel: false,
						tabBarStyle: {
							backgroundColor: "white",
							elevation: 0, // remove shadow on Android
							shadowOpacity: 0, // remove shadow on iOS
						},
						tabBarActiveTintColor: "red",
						tabBarIndicatorStyle: {
							backgroundColor: "black",
						},
					}}
				>
					<Tab.Screen
						name="Past"
						component={Past}
						options={{
							tabBarIcon: () => <TabBarIcon name="calendar" color={"black"} />,
						}}
					/>
					<Tab.Screen
						name="Tickets"
						component={Tickets}
						options={{
							tabBarIcon: () => <TabBarIcon name="ticket" color={"black"} />,
						}}
					/>
				</Tab.Navigator>
			</View>
		</View>
	);
};
export default More;
