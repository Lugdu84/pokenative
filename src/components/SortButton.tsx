import { useThemeColors } from '@/hooks/useThemeColors';
import { useRef, useState } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Pressable,
	Modal,
	Text,
	Dimensions,
} from 'react-native';
import ThemedText from './ThemedText';
import Card from './Card';
import Row from './Row';
import Radio from './Radio';
import { Shadows } from './Shadows';

type valueType = 'id' | 'name';

type SortButtonProps = {
	value: valueType;
	onChange: (value: valueType) => void;
};

const options = [
	{ label: 'Number', value: 'id' },
	{ label: 'Name', value: 'name' },
] as const;

export default function SortButton({ value, onChange }: SortButtonProps) {
	const colors = useThemeColors();
	const buttonRef = useRef<View>(null);
	const [showModal, setShowModal] = useState(false);
	const [position, setPosition] = useState<null | {
		top: number;
		right: number;
	}>(null);

	const onButtonPress = () => {
		buttonRef.current?.measureInWindow((x, y, width, height) => {
			setPosition({
				top: y + height,
				right: Dimensions.get('window').width - x - width,
			});
			setShowModal(true);
		});
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<Pressable onPress={onButtonPress}>
				<View
					ref={buttonRef}
					style={[styles.button, { backgroundColor: colors.grayWhite }]}>
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
					<View
						style={[
							styles.popup,
							{
								backgroundColor: colors.tint,
								...position,
							},
						]}>
						<ThemedText
							style={styles.title}
							variant="subtitle2"
							color="grayWhite">
							Sort by:
						</ThemedText>
						<Card style={styles.card}>
							{options.map((option) => (
								<Pressable
									key={option.value}
									onPress={() => onChange(option.value)}>
									<Row gap={8}>
										<Radio checked={option.value === value} />
										<ThemedText
											variant="subtitle1"
											color="grayDark">
											{option.label}
										</ThemedText>
									</Row>
								</Pressable>
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
		width: 113,
		...Shadows.dp2,
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
