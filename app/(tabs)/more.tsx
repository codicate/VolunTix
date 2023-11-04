import { Stack, useRouter, Link } from "expo-router";
import { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { appSignOut } from "#configs/authStore";
import { Button } from "react-native-elements";
import { AuthStore } from "#configs/authStore";
import CheckIn from "#components/CheckIn";
import styles from "app/styles";

const More = () => {
  const router = useRouter();
  const SignOut = async () => {
    await appSignOut();
    router.push("/signin");
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = AuthStore.useState((s) => s.user);

  const showCheckIn = () => {
    if (user) setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Volunteer opportunities near New York, NY
        </Text>
      </View>
      <Text style={styles.title}>Hi {user?.displayName}!</Text>
      <Button onPress={showCheckIn} title="Show Check In QR Code" />
      <Button onPress={async () => SignOut()} title="Sign Out" />
      <CheckIn
        isVisible={isModalVisible}
        user={user!!}
        onClose={onModalClose}
      />
    </View>
  );
};
export default More;
