import { Redirect, Stack, useRouter } from 'expo-router';
import {
	Button,
	Pressable,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { Card, Avatar, Icon } from '@rneui/themed';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';


const Events = () => {
	// Dummy items
	const volunteering = [
		{
			eventid: 1,
			image:
				'https://preview.redd.it/b7c15eopgod61.jpg?width=1080&crop=smart&auto=webp&s=06e5e7a7480dda46de5d134bd88d07d2707a7213',
			title: 'Food Drive',
			points: 100,
			location: 'New York, NY',
			text: 'Jia and sally need treats',
		},
		{
			eventid: 2,
			image:
				'https://styles.redditmedia.com/t5_2sz47w/styles/profileIcon_27oknokmpl751.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=28d7ad80a30537fd63d7e931b90279987ad98d23',
			title: 'Blood Drive',
			points: 300,
			location: 'LA, CA',
			text: 'Jia and sally need treats',
		},
	];

	const handleEnroll = (item: { eventid: any }) => {
		// Handle enroll
		console.log(`Enrolled in: ${item.eventid}`);
	};

		return (
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Volunteer opportunities near New York, NY</Text>
				</View>
				<ScrollView>
					{volunteering.map((event, eventid) => (
						<Card containerStyle={styles.card} key={eventid}>
							<Card.Image 
								source={{uri:event.image}}
								style={ styles.card.image }>
									<LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)', 'black']} style={{ ...styles.gradient }}>
									</LinearGradient>
                  <View style={styles.pointsContainer}>
										<Icon name="star" size={16} color="#FFD700" />
										<Text style={styles.points}>{event.points}</Text>
									</View>
									<Card.Title style={ styles.title }>{event.title}</Card.Title>
                  <Card.FeaturedSubtitle style={ styles.subtitle }>{event.location}</Card.FeaturedSubtitle> 
							</Card.Image>
						</Card>
					))}
				</ScrollView>
			</View>
		);
	};

	const styles = StyleSheet.create({
		header: {
			backgroundColor: '#f8f8f8',
			padding: 10,
			borderBottomWidth: 1,
			borderBottomColor: '#ddd',
		},
		card: {
      	  padding: 0,
		  marginLeft: '2.5%',
		  marginRight: '2.5%',
		  width: '95%',
		  height: 'auto',
		  borderRadius: 10,
		  image: {

			  borderRadius: 10,
		}
		},
		title: {
			color: 'white',
			paddingTop: 55,
			paddingBottom: 0,
			marginBottom: 5,
			paddingLeft: 12.5,
			textAlign: 'left'
		},
		subtitle: {
			color: 'white',
		  fontSize: 13,
		  textAlign: 'left',
		  paddingLeft: 12.5,
		},
		gradient: {
			flex: 1,
			justifyContent: 'flex-end',
			padding: 16,
			position: 'absolute', 
			bottom: 0, 
			height: '33%'
		  },
		headerText: {
			fontSize: 18,
			fontWeight: 'bold',
		},
		pointsContainer: {  
			paddingTop: '2.5%',
			paddingRight: '12.5%',
			alignItems: 'flex-end',
		},
		points: {
			color: 'white',
			fontSize: 16,
			marginLeft: 5,
		},
	});

	export default Events;