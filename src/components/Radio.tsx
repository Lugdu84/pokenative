import { useThemeColors } from '@/hooks/useThemeColors';
import { View, StyleSheet } from 'react-native';

type RadioProps = {
	checked: boolean;
};

export default function Radio({ checked }: RadioProps) {
	const colors = useThemeColors();
	return (
		<View style={[styles.radio, { borderColor: colors.tint }]}>
			{checked && (
				<View style={[styles.radioInner, { backgroundColor: colors.tint }]} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	radio: {
		width: 14,
		height: 14,
		borderRadius: 14,
		borderWidth: 1,
		borderStyle: 'solid',
		alignItems: 'center',
		justifyContent: 'center',
	},
	radioInner: {
		width: 6,
		height: 6,
		borderRadius: 6,
	},
});
