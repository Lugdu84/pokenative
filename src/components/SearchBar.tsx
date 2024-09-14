import { TextInput, Image, StyleSheet } from 'react-native';
import Row from './Row';
import { useThemeColors } from '@/hooks/useThemeColors';

type SearchBarProps = {
	value: string;
	onChange: (text: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
	const colors = useThemeColors();
	return (
		<Row
			style={[styles.wrapper, { backgroundColor: colors.grayWhite }]}
			gap={8}>
			<Image
				source={require('@assets/images/search.png')}
				width={16}
				height={16}
			/>
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				value={value}
			/>
		</Row>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		borderRadius: 16,
		height: 32,
		paddingHorizontal: 12,
	},
	input: {
		flex: 1,
		fontSize: 14,
	},
});
