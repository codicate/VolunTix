import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { Input, Chip } from '@rneui/themed';
import Stepper from '#components/Stepper';
import { useState } from 'react';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { createUser } from '#configs/userStore';
import { AuthStore } from '#configs/authStore';

export default function Onboard() {
	const router = useRouter();
	const { user } = AuthStore.useState();
	const completeOnboard = async () => {
		if (!user) return;
		await createUser(user, firstNameRef.current + ' ' + lastNameRef.current);
		router.push('/events');
	};

	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const [selectedItem, setSelectedItem] = useState<any>(null);
	const [interests, setInterests] = useState(interestMap);

	const Input1 = () => (
		<>
			<Input
				placeholder="First Name"
				nativeID="firstName"
				onChangeText={(text) => {
					firstNameRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Input
				placeholder="Last name"
				nativeID="lastName"
				onChangeText={(text) => {
					lastNameRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
		</>
	);

	const Input2 = () => (
		<>
			<Text>Home City</Text>
			<AutocompleteDropdown
				containerStyle={styles.autocompleteContainer}
				clearOnFocus={false}
				closeOnSubmit={false}
				onSelectItem={setSelectedItem}
				inputContainerStyle={{
					backgroundColor: '#fff',
				}}
				dataSet={cities}
			/>
		</>
	);

	const Input3 = () => (
		<View style={styles.chips}>
			{interests.map(({ name, selected }) => (
				<Chip
					key={name}
					title={name}
					containerStyle={{
						margin: 0,
					}}
					onPress={() => {
						setInterests(
							interests.map((interest) => {
								if (interest.name === name) {
									return {
										...interest,
										selected: !interest.selected,
									};
								}
								return interest;
							})
						);
					}}
					type={selected ? 'solid' : 'outline'}
				/>
			))}
		</View>
	);

	return (
		<View style={styles.screen}>
			<Stepper
				steps={['Name', 'City', 'Interests']}
				components={[Input1, Input2, Input3]}
				submit={completeOnboard}
			></Stepper>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 400,
		margin: 'auto',
	},
	autocompleteContainer: {
		width: 300,
	},
	textInput: {
		width: 250,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#2089dc',
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginBottom: 8,
	},
	chips: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: 350,
		gap: 10,
	},
});

const interestMap = [
	{ name: 'cooking', selected: false },
	{ name: 'teaching', selected: false },
	{ name: 'gardening', selected: false },
	{ name: 'mentoring', selected: false },
	{ name: 'childcare', selected: false },
	{ name: 'web design', selected: false },
	{ name: 'graphic design', selected: false },
	{ name: 'marketing', selected: false },
	{ name: 'first aid', selected: false },
	{ name: 'fundraising', selected: false },
	{ name: 'event planning', selected: false },
	{ name: 'cleaning', selected: false },
	{ name: 'data entry', selected: false },
	{ name: 'language translation', selected: false },
	{ name: 'public speaking', selected: false },
	{ name: 'animal care', selected: false },
];

const cities = [
	{ id: '1', title: 'New York City, NY' },
	{ id: '2', title: 'Los Angeles, CA' },
	{ id: '3', title: 'Chicago, IL' },
	{ id: '4', title: 'Houston, TX' },
	{ id: '5', title: 'Phoenix, AZ' },
	{ id: '6', title: 'Philadelphia, PA' },
	{ id: '7', title: 'San Antonio, TX' },
	{ id: '8', title: 'San Diego, CA' },
	{ id: '9', title: 'Dallas, TX' },
	{ id: '10', title: 'San Jose, CA' },
	{ id: '11', title: 'Austin, TX' },
	{ id: '12', title: 'Jacksonville, FL' },
	{ id: '13', title: 'Fort Worth, TX' },
	{ id: '14', title: 'Columbus, OH' },
	{ id: '15', title: 'Charlotte, NC' },
	{ id: '16', title: 'Indianapolis, IN' },
	{ id: '17', title: 'San Francisco, CA' },
	{ id: '18', title: 'Seattle, WA' },
	{ id: '19', title: 'Denver, CO' },
	{ id: '20', title: 'Washington, D.C.' },
	{ id: '21', title: 'Boston, MA' },
	{ id: '22', title: 'Rochester, NY' },
	{ id: '23', title: 'Nashville, TN' },
	{ id: '24', title: 'Detroit, MI' },
	{ id: '25', title: 'Oklahoma City, OK' },
	{ id: '26', title: 'Portland, OR' },
	{ id: '27', title: 'Las Vegas, NV' },
	{ id: '28', title: 'Memphis, TN' },
	{ id: '29', title: 'Syracuse, NY' },
	{ id: '30', title: 'Baltimore, MD' },
];
