import { useThemeColors } from '@/hooks/useThemeColors';
import { useState } from 'react';
import { StyleSheet, View, Image, Pressable, Modal, Text } from 'react-native';

type valueType = 'id' | 'name';

type SortButtonProps = {
	value: valueType;
	onChange: (value: valueType) => void;
};

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
					onPress={() => setShowModal(false)}>
					<Text>Sort Modal !</Text>
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
});
