import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
export const useThemeColors = () => {
	const theme = useColorScheme() ?? 'light';
	return Colors[theme];
};
