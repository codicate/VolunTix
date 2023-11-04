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
});

export default styles;
