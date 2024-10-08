import { View, ViewProps, ViewStyle } from 'react-native';
import { Shadows } from './Shadows';
import { useThemeColors } from '@/hooks/useThemeColors';

type CardProps = ViewProps;

export default function Card({ style, ...rest }: CardProps) {
	const colors = useThemeColors();
	return (
		<View
			{...rest}
			style={[style, styles, { backgroundColor: colors.grayWhite }]}></View>
	);
}

const styles = {
	borderRadius: 8,
	overflow: 'visible',
	...Shadows.dp2,
} satisfies ViewStyle;
