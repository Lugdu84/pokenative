import { View, ViewProps, ViewStyle } from 'react-native';
import { Shadows } from './Shadows';

type CardProps = ViewProps;

export default function Card({ style, ...rest }: CardProps) {
	return (
		<View
			{...rest}
			style={[style, styles]}></View>
	);
}

const styles = {
	backgroundColor: '#FFF',
	borderRadius: 8,
	...Shadows.dp2,
} satisfies ViewStyle;
