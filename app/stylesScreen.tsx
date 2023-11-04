import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#f8f8f8",
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
		flex: 1,
		marginRight: "13%",
	},
	backButton: {
		marginRight: 10,
		color: "blue",
	},
	container: {
		flex: 1,
		padding: 10,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	location: {
		fontSize: 16,
		color: "#333",
		marginTop: 10,
	},
	description: {
		marginTop: 10,
		fontSize: 16,
	},
	informationContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	points: {
		fontSize: 16,
		color: "#333",
	},
	volunteerButton: {
		backgroundColor: "#007BFF",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
});

export default styles;
