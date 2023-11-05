import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#ffffff",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	view: {
		paddingLeft: 0,
	},
	card: {
		padding: 0,
		marginVertical: 10,
		marginHorizontal: "auto",
		width: "95%",
		height: "auto",
		borderRadius: 10,
		image: {
			borderRadius: 10,
		},
	},
	title: {
		color: "white",
		paddingTop: 85,
		paddingBottom: 0,
		marginBottom: 5,
		paddingLeft: 12.5,
		fontSize: 25,
		textAlign: "left",
	},
	gradient: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 16,
		position: "absolute",
		bottom: 0,
		height: "33%",
	},
	subtitle: {
		color: "white",
		fontSize: 13,
		textAlign: "left",
		paddingLeft: 12.5,
	},
	carousel: {
		borderRadius: 15,
		marginLeft: "2.5%",
		marginRight: "2.5%",
	},
	carousal_card: {
		padding: 0,
		width: screenWidth / 4,
		marginLeft: 0,
		marginRight: 5,
		borderRadius: 12.5,
		image: {
			padding: 0,
			borderRadius: 12.5,
			height: screenHeight * 0.1,
		},
		title: {
			color: "white",
		},
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	pointsContainer: {
		position: "absolute",
		top: 0,
		right: 0,
		padding: 10,
	},
	pointsText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	container: {
		paddingTop: "0%",
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	avatar: {
		paddingTop: 20,
	},
	stats: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		gap: 50,
		flex: 1,
	},
	event: {
		alignItems: "center",
	},
	points: {
		alignItems: "center",
	},
	number: {
		fontSize: 16,
		fontWeight: "bold",
	},
	label: {
		fontSize: 16,
	},
	tab: {
		paddingTop: "10%",
	},
	navigator: {
		display: "flex",
		paddingTop: "5%",
	},
	icon: {},
	pastcard: {
		padding: 0,
		borderRadius: 12.5,
	},
	image: {
		borderRadius: 12.5,
		marginLeft: "2.5%",
		height: 60,
		width: 70,
	},
	text: {
		color: "black",
		fontSize: 15,
		paddingTop: "1.5%",
		marginLeft: 10,
	},
	date: {
		marginLeft: 10,
		fontSize: 12,
	},
});

export default styles;
