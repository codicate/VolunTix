import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import { User } from 'firebase/auth';
import Icon from '@expo/vector-icons/FontAwesome';
import { UserStore } from '#configs/userStore';

export default function CheckIn({
	isVisible,
	user,
	onClose,
}: {
	isVisible: boolean;
	user: User;
	onClose: () => void;
}) {
	const checkedIn = UserStore.useState((s) => s.registeredEvent.checkedIn);
	if (!user) return null;
	const qrCodeLink = 'https://codicate.github.io/jia?userId=' + user.uid;

	return (
		<Modal animationType="slide" transparent={true} visible={isVisible}>
			<View style={styles.modalContent}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Show this to event coordinator</Text>
					<Pressable onPress={onClose}>
						<MaterialIcons name="close" color="#fff" size={30} />
					</Pressable>
				</View>
				<View style={styles.content}>
					{!checkedIn ? (
						<>
							<View style={styles.flipped}>
								<Text style={styles.info}>{user.displayName}</Text>
								<Text style={styles.info}>{user.email}</Text>
							</View>
							<View style={styles.qrCode}>
								<QRCode size={400} value={qrCodeLink} />
							</View>
							<View>
								<Text style={styles.info}>{user.displayName}</Text>
								<Text style={styles.info}>{user.email}</Text>
							</View>
						</>
					) : (
						<>
							<Icon
								size={200}
								color="#1ed55f"
								style={{ marginBottom: -3 }}
								name="check-circle"
							/>
							<Text style={styles.info}>Checked In!</Text>
						</>
					)}
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		boxShadow: '0 -200px rgba(0,0,0,0.75)',
		height: '90%',
		width: '100%',
		backgroundColor: '#25292e',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: 'absolute',
		bottom: 0,
	},
	titleContainer: {
		height: '10%',
		backgroundColor: '#464C55',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: '#fff',
		fontSize: 20,
	},
	pickerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 50,
		paddingVertical: 20,
	},
	content: {
		display: 'flex',
		height: '90%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	flipped: {
		transform: [{ rotate: '180deg' }],
	},
	info: {
		color: '#ccc',
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 5,
	},
	qrCode: {
		backgroundColor: '#fff',
		padding: 40,
		borderRadius: 30,
	},
});
