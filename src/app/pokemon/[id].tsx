import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function PokemonDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	return (
		<View>
			<Text>Detail du pokemon : {id}</Text>
		</View>
	);
}
