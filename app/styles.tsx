import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  view: {
    paddingLeft: 0,
  },
  card: {
    padding: 0,
    marginLeft: "2.5%",
    marginRight: "2.5%",
    width: "95%",
    height: "auto",
    borderRadius: 10,
    image: {
      borderRadius: 10,
    },
  },
  title: {
    color: "white",
    paddingTop: 95,
    paddingBottom: 0,
    marginBottom: 5,
    paddingLeft: 12.5,
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
    paddingLeft: "5%",
  },
  avatar: {
    paddingTop: "7.5%",
  },
  stats: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: "5%",
    paddingLeft: "15%",
  },
  event: {
    alignItems: "center",
    paddingRight: "30%",
  },
  points: {
    alignItems: "center",
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
  },
  tab: {
    paddingTop: "10%",
  },
  navigator: {
    minHeight: 1000,
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
    marginBottom: "10%",
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
