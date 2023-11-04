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

import { Card } from '@rneui/themed';
import {LinearGradient} from 'expo-linear-gradient';

const Shop = () => {
	const router = useRouter();

	const events = [
		{
			eventid: 1,
			avatar: 'avatar1.jpg',
			title: 'Arsenal vs Chelsea',
			image:
				'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/12/16629868110245.jpg',
			type: 'Sports',
			location: 'Emirates Stadium',
			text: 'Premier League Game',
			points: 10,
			date: new Date('2023-11-03'),
			items: [
				{
					name: 'Match Ball',
					image:
						'https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=900,fit=cover/app/uploads/2023/07/14081939/premier-league-ball-22-23-scaled.jpeg',
				},
				{
					name: 'Signed Shirt',
					image:
						'https://thematchdayshop.com/cdn/shop/products/fa1b11_407f76bfd9a445acba98119707d22785_mv2.jpg',
				},
				{
					name: 'Signed Shirt',
					image:
						'https://thematchdayshop.com/cdn/shop/products/fa1b11_407f76bfd9a445acba98119707d22785_mv2.jpg',
				},
				{
					name: 'Match Ball',
					image:
						'https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=900,fit=cover/app/uploads/2023/07/14081939/premier-league-ball-22-23-scaled.jpeg',
				},
			],
		},
		{
			eventid: 2,
			avatar: 'avatar2.jpg',
			title: 'The Rolling Stones Concert',
			image:
				'https://media.npr.org/assets/img/2021/09/27/ap21270096664048-f8940df4e2103ac8dfab80c847e3e0fd6afb1bb1-s1100-c50.jpg',
			type: 'Concert',
			location: 'Madison Square Garden',
			text: 'Music Concert',
			points: 15,
			date: new Date('2023-11-03'),
			items: [
				{
					name: 'Match Ball',
					image:
						'https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=900,fit=cover/app/uploads/2023/07/14081939/premier-league-ball-22-23-scaled.jpeg',
				},
				{
					name: 'Signed Shirt',
					image:
						'https://thematchdayshop.com/cdn/shop/products/fa1b11_407f76bfd9a445acba98119707d22785_mv2.jpg',
				},
				{
					name: 'Signed Shirt',
					image:
						'https://thematchdayshop.com/cdn/shop/products/fa1b11_407f76bfd9a445acba98119707d22785_mv2.jpg',
				},
				{
					name: 'Match Ball',
					image:
						'https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=900,fit=cover/app/uploads/2023/07/14081939/premier-league-ball-22-23-scaled.jpeg',
				},
			],
		},
	];

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Redeem Impact Points</Text>
			</View>
			<ScrollView>
				{events.map((event, idx) => (
					<View key={idx}>
						<Card containerStyle={styles.card} key={idx}>
							<Card.Image
								source={{ uri: event.image }}
								style={styles.card.image}
							>
								<LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)', 'black']} style={{ ...styles.gradient }}>
								</LinearGradient>
								<Card.Title style={styles.title}>{event.title}</Card.Title>
								<Card.FeaturedSubtitle style={styles.subtitle}>
									{event.type} • {event.location}
								</Card.FeaturedSubtitle>
							</Card.Image>
						</Card>
						<ScrollView style={styles.subview} horizontal={true}>
							{event.items?.map((item, index) => (
								<Card containerStyle={styles.subcard} key={index}>
									<Card.Image
										source={{ uri: item.image }}
										style={{ ...styles.subcard.image }}
									>
										<LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)', 'black']} style={{ ...styles.gradient }}>
										</LinearGradient>
									</Card.Image>
								</Card>
							))}
						</ScrollView>
					</View>
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
	view: {
		paddingLeft: 0,
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
		},
	},
	title: {
		color: 'white',
		paddingTop: 95,
		paddingBottom: 0,
		marginBottom: 5,
		paddingLeft: 12.5,
		textAlign: 'left'
	},
	gradient: {
		flex: 1,
		justifyContent: 'flex-end',
		padding: 16,
		position: 'absolute', 
		bottom: 0, 
		height: '33%'
	  },
	subtitle: {
		color: 'white',
		fontSize: 13,
		textAlign: 'left',
		paddingLeft: 12.5,
	},
	subview: {
		borderRadius: 15,
		marginLeft: '2.5%',
		marginRight: '2.5%',
	},
	subcard: {
		padding: 0,
		// marginRight: '5%',
		// marginLeft: '5%',
		// width: '1500%',
		borderRadius: 10,
		image: {
			borderRadius: 10,
			height: 90,
		},
		title: {
			color: 'white',
		},
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default Shop;
