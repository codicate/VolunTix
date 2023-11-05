import shopData from "assets/server/shop.json";
import { View, Image, ScrollView, Text } from "react-native";

import { ListItem, Avatar, Card } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import styles from "#app/styles";

const Tickets = () => {
  const shop = shopData;

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: "5%",
        paddingBottom: "100%",
      }}
    >
      <ScrollView>
        {shop.map((event, eventid) => (
          <View key={eventid} style={{ flexDirection: "row" }}>
            <Image style={styles.image} source={{ uri: event.image }}></Image>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>{event.title}</Text>
              <Text style={styles.text}>{event.location}</Text>
              <Text style={styles.date}>16 July</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tickets;
