
import { Redirect, Stack, useRouter } from 'expo-router';
import { Button, Pressable, Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import { AuthStore } from '#configs/store';
import { ListItem, Avatar } from 'react-native-elements';
import React from 'react';

const Events = () => {
  // Dummy items
  const items = [
    { eventid: 1, avatar: 'avatar1.jpg', title: 'Food Drive' , text: 'Jia and sally need treats'},
    { eventid: 2, avatar: 'avatar2.jpg', title: 'Blood Drive' , text: 'Jia and sally need treats'},
  ];

  const handleEnroll = (item: { eventid: any; }) => {
    // Handle enroll
    console.log(`Enrolled in: ${item.eventid}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Volunteering activities for you</Text>
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleEnroll(item)}>
            <ListItem bottomDivider>
              <Avatar source={{ uri: item.avatar }} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.text}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Events;