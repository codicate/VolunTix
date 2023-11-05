import { Stack, useRouter, Link } from "expo-router";
import { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { appSignOut } from "#configs/authStore";
import Icon from "@expo/vector-icons/FontAwesome";
import { AuthStore } from "#configs/authStore";
import CheckIn from "#components/CheckIn";
import styles from "app/styles";
import volunteeringData from "assets/server/events.json";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Avatar } from "@rneui/themed";
import Past from "#app/(screens)/past";
import { EventCard } from "#app/(tabs)/events";
import Tickets from "#app/(screens)/tickets";
import { UserStore } from "#configs/userStore";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof Icon>["name"];
}) {
	return (
		<Icon size={22} style={{ marginBottom: -3 }} color="#333" {...props} />
	);
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
	const points = UserStore.useState((s) => s.points);
	const registeredEvent = UserStore.useState((s) => s.registeredEvent);
	const redeemedItems = UserStore.useState((s) => s.redeemedItems);

	return (
		<View style={{ backgroundColor: "white" }}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					paddingTop: 20,
					paddingBottom: 10,
					paddingHorizontal: 20,
					gap: 25,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						marginRight: "auto",
					}}
				>
					Hi {user?.displayName}!
				</Text>
				<Icon name="sign-out" size={20} onPress={SignOut} />
				<Icon name="bars" size={20} />
			</View>
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
						<Text style={styles.number}>2</Text>
						<Text style={styles.label}>Events</Text>
					</View>
					<View style={styles.points}>
						<Text style={styles.number}>{redeemedItems.length}</Text>
						<Text style={styles.label}>Items</Text>
					</View>
					<View style={styles.points}>
						<Text style={styles.number}>{points || 0}</Text>
						<Text style={styles.label}>Points</Text>
					</View>
				</View>
			</View>
			{registeredEvent && (
				<EventCard
					event={volunteeringData[registeredEvent.id]}
					onClick={showCheckIn}
				/>
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
							backgroundColor: "#888",
							height: 2,
						},
					}}
				>
					<Tab.Screen
						name="Past"
						component={Past}
						options={{
							tabBarIcon: () => <TabBarIcon name="calendar" />,
						}}
					/>
					<Tab.Screen
						name="Tickets"
						component={Tickets}
						options={{
							tabBarIcon: () => <TabBarIcon name="ticket" />,
						}}
					/>
				</Tab.Navigator>
			</View>
		</View>
	);
};
export default More;
