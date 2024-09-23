import RootView from '@/components/RootView';
import Row from '@/components/Row';
import ThemedText from '@/components/ThemedText';
import { useFetchQuery } from '@/hooks/useFetchQuery';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Pressable } from 'react-native';

export default function PokemonDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { data: pokemon } = useFetchQuery('pokemon/[id]', { id });

	return (
		<RootView>
			<Row style={styles.header}>
				<Image
					style={styles.pokeball}
					source={require('@assets/images/pokeball_big.png')}
				/>
				<Row gap={8}>
					<Pressable onPress={router.back}>
						<Image
							source={require('@assets/images/arrow_back.png')}
							style={{ width: 32, height: 32, tintColor: 'white' }}
						/>
					</Pressable>
					<ThemedText
						color="grayWhite"
						variant="headline">
						{pokemon?.name}
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
	pokeball: {
		width: 208,
		height: 208,
		opacity: 0.1,
		position: 'absolute',
		right: 8,
		top: 8,
	},
});

// youtube => 01:43
