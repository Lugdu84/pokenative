import { useThemeColors } from '@/hooks/useThemeColors';
import { useState } from 'react';
import { StyleSheet, View, Image, Pressable, Modal, Text } from 'react-native';
import ThemedText from './ThemedText';
import Card from './Card';
import Row from './Row';

type valueType = 'id' | 'name';

type SortButtonProps = {
	value: valueType;
	onChange: (value: valueType) => void;
};

const options = [
	{ label: 'Number', value: 'id' },
	{ label: 'Name', value: 'name' },
];

export default function SortButton({ value, onChange }: SortButtonProps) {
	const colors = useThemeColors();
	const [showModal, setShowModal] = useState(false);

	const onButtonPress = () => {
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};
	return (
		<>
			<Pressable onPress={onButtonPress}>
				<View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
					<Image
						source={
							value === 'id'
								? require('@assets/images/number.png')
								: require('@assets/images/alpha.png')
						}
						style={styles.image}
					/>
				</View>
			</Pressable>
			<Modal
				transparent
				visible={showModal}
				onRequestClose={onClose}>
				<Pressable
					style={styles.backdrop}
					onPress={onClose}>
					<View style={[styles.popup, { backgroundColor: colors.tint }]}>
						<ThemedText
							style={styles.title}
							variant="subtitle2"
							color="grayWhite">
							Sort by:
						</ThemedText>
						<Card style={styles.card}>
							{options.map((option) => (
								<Row key={option.value}>
									<ThemedText
										variant="subtitle1"
										color="grayDark">
										{option.label}
									</ThemedText>
								</Row>
							))}
						</Card>
					</View>
				</Pressable>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 32,
		height: 32,
		borderRadius: 32,
		// flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 16,
		height: 16,
	},
	backdrop: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	popup: {
		padding: 4,
		paddingTop: 16,
		gap: 16,
		borderRadius: 12,
		position: 'absolute',
		top: 100,
		left: 50,
		width: 200,
		height: 200,
	},
	title: {
		paddingLeft: 16,
	},
	card: {
		paddingVertical: 16,
		paddingHorizontal: 20,
		gap: 16,
	},
});
