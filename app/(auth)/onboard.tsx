import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Button, Input } from '@rneui/themed';
import { styles } from './signin';

export default function Onboard() {
	const router = useRouter();
	const completeOnboard = async () => {
		router.push('/events');
	};

	return <View style={styles.screen}></View>;
}
