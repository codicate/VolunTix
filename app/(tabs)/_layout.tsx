import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { AuthStore } from '#configs/store';

import Colors from '#constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const { initialized, isLoggedIn } = AuthStore.useState();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors['light'].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="events"
				options={{
					title: 'Events',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="shop"
				options={{
					title: 'Shop',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</Tabs>
	);
}
