import { View, Text, ViewProps, StyleSheet } from 'react-native';

type RowProps = ViewProps & {
	gap?: number;
};

export default function Row({ style, gap, ...rest }: RowProps) {
	return (
		<View
			style={[styles.rowStyles, style, gap ? { gap } : undefined]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	rowStyles: {
		flexDirection: 'row',
		flex: 0,
		alignItems: 'center',
	},
});
