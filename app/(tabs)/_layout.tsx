import Icon from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { AuthStore } from '#configs/authStore';

import Colors from '#constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof Icon>['name'];
	color: string;
}) {
	return <Icon size={28} style={{ marginBottom: -3 }} {...props} />;
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
					title: 'Volunteer',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="calendar-o" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="shop"
				options={{
					title: 'Redeem',
					tabBarIcon: ({ color }) => <TabBarIcon name="ticket" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: 'More',
					tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
				}}
			/>
		</Tabs>
	);
}
