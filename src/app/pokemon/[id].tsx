import RootView from '@/components/RootView';
import Row from '@/components/Row';
import { useLocalSearchParams } from 'expo-router';
import { Text, StyleSheet, Image } from 'react-native';

export default function PokemonDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	return (
		<RootView>
			<Row style={styles.header}>
				<Row>
					<Image
						source={require('@assets/images/arrow_back.png')}
						style={{ width: 32, height: 32, tintColor: 'white' }}
					/>
				</Row>
			</Row>
			<Text>Detail du pokemon : {id}</Text>
		</RootView>
	);
}

const styles = StyleSheet.create({
	header: {
		margin: 20,
		justifyContent: 'space-between',
	},
});

// youtube => 01:43
