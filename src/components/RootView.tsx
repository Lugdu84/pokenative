import { useThemeColors } from '@/hooks/useThemeColors';
import { ViewProps, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootViewProps = ViewProps;

export default function RootView({ style, ...rest }: RootViewProps) {
	const colors = useThemeColors();
	return (
		<SafeAreaView
			style={[styles.container, { backgroundColor: colors.tint }]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
});
