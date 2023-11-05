import { Redirect, Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from 'app/stylesScreen';
import volunteeringData from 'assets/server/events.json';
import { registerForEvent } from '#configs/userStore';

import { Card, Icon } from '@rneui/themed';
import { AuthStore } from '#configs/authStore';

const EventsPage = () => {
	const router = useRouter();
	const user = AuthStore.useState((s) => s.user);
	const [registered, setRegistered] = React.useState(false);
	const { eventid } = useLocalSearchParams();
	const handleBackButtonClick = () => {
		router.push('/events');
	};

	const handleVolunteerButtonClick = () => {
		if (user) {
			registerForEvent(user, eventid as string);
			setRegistered(true);
		}
	};

	const currentVolunteering = volunteeringData[Number(eventid)];

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.backButton} onPress={handleBackButtonClick}>
					Back
				</Text>
				<Text style={styles.headerText}>{currentVolunteering.title}</Text>
			</View>
			<View style={styles.container}>
				<Card containerStyle={styles.eventCard}>
					<Card.Image
						source={{ uri: currentVolunteering.image }}
						style={styles.image}
					/>
					<View style={styles.locationPointsContainer}>
						<Card.Title style={styles.location}>
							{currentVolunteering.location}
						</Card.Title>
						<View style={styles.pointsContainer}>
							<Icon name="star" type="font-awesome" color="#f50" />
							<Text>{currentVolunteering.points}</Text>
						</View>
					</View>
					<Card.Divider />
					<Text style={styles.description}>{currentVolunteering.text}</Text>
				</Card>
				<TouchableOpacity
					style={{
						...styles.volunteerButton,
						backgroundColor: registered ? '#888' : '#2f95dc',
					}}
					onPress={handleVolunteerButtonClick}
				>
					<Text style={styles.buttonText}>
						{registered ? 'Registered' : 'Volunteer'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EventsPage;
