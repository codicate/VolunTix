import { Redirect, Stack, useRouter } from 'expo-router';
import { Button, Pressable, Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import { AuthStore } from '#configs/store';

import { Card } from '@rneui/themed';

const Shop = () => {
	const router = useRouter();

	const events = [
		{eventid: 1, avatar: 'avatar1.jpg', title: 'Arsenal vs Chelsea', image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/12/16629868110245.jpg', type: "Sports", location: "Emirates Stadium", text: 'Premier League Game', points: 10, date: new Date("2023-11-03")},
		{eventid: 2, avatar: 'avatar2.jpg', title: 'The Rolling Stones Concert', image: 'https://media.npr.org/assets/img/2021/09/27/ap21270096664048-f8940df4e2103ac8dfab80c847e3e0fd6afb1bb1-s1100-c50.jpg', type: "Concert", location: "Madison Square Garden", text: 'Music Concert', points: 15, date: new Date("2023-11-03")},
	]

	return (
		<View style={{ flex: 1 }}>
      	 	<View style={styles.header}>
        		<Text style={styles.headerText}>Redeem Impact Points</Text>
      		</View>
			<ScrollView>
				{events.map((event, index) => (
					<Card containerStyle={styles.card}>	
						<Card.Image 
							source={{uri:event.image}}
							style={ styles.image }
						>
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
	image: {
		backgroundImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 70%, black)",
		borderRadius: 10,
	},
	card: {
		padding: 0,
		borderRadius: 10,
	},
	title: {
		color: 'white',
		paddingTop: 95,
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
	headerText: {
	  fontSize: 18,
	  fontWeight: 'bold',
	},
  });

export default Shop;
