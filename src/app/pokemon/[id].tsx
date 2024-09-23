import RootView from '@/components/RootView';
import Row from '@/components/Row';
import ThemedText from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

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
					<ThemedText
						color="grayWhite"
						variant="headline">
						Pokemon Detail
					</ThemedText>
				</Row>
				<ThemedText
					color="grayWhite"
					variant="subtitle2">
					#{id.padStart(3, '0')}
				</ThemedText>
			</Row>
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
