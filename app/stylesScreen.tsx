import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#f8f8f8',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	headerText: {
		fontSize: 20,
		textAlign: 'center',
		flex: 1,
		marginRight: '13%',
	},
	backButton: {
		marginRight: 10,
		color: 'blue',
	},
	container: {
		flex: 1,
		padding: 10,
		minHeight: screenHeight,
		borderRadius: 10,
	},
	eventCard: {
		padding: 0,
		marginLeft: '2.5%',
		marginRight: '2.5%',
		width: '95%',
		height: 'auto',
		borderRadius: 10,
	},
	image: {
		width: '100%',
		height: 300,
		borderRadius: 10,
	},
	locationPointsContainer: {
		minHeight: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	pointsContainer: {
		minHeight: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	location: {
		fontSize: 16,
		paddingTop: 20,
	},
	description: {
		fontSize: 16,
		color: '#333',
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
	},
	volunteerButton: {
		minHeight: 40,
		backgroundColor: '#007BFF',
		padding: 10,
		marginTop: 20,
		borderRadius: 5,
		alignItems: 'center',
		alignSelf: 'center',
		width: '50%',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
	},
});

export default styles;
