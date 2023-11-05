import volunteeringData from "assets/server/events.json";
import { View, Image, ScrollView, Text } from "react-native";

import { ListItem, Avatar, Card } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "#app/styles";

const Past = () => {
  const volunteering = volunteeringData;

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: "5%",
        paddingBottom: "100%",
      }}
    >
      <ScrollView>
        {volunteering.map((event, eventid) => (
          <View key={eventid} style={{ flexDirection: "row" }}>
            {/* <Card containerStyle={styles.pastcard}> */}
            <Image style={styles.image} source={{ uri: event.image }}></Image>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>{event.title}</Text>
              <Text style={styles.text}>{event.location}</Text>
              <Text style={styles.date}>16 July</Text>
            </View>
            <Text style={{ paddingLeft: "30%", fontSize: 25 }}>⭐ 90</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Past;
