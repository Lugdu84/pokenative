import Card from '@/components/Card';
import PokemonCard from '@/components/pokemon/PokemonCard';
import ThemedText from '@/components/ThemedText';
import { useThemeColors } from '@/hooks/useThemeColors';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const pokemons = Array.from({ length: 35 }, (_, i) => ({
		id: i + 1,
		name: `Pokemon ${i + 1}`,
	}));
	const colors = useThemeColors();
	return (
		<SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
			<View style={styles.header}>
				<Image
					source={require('@assets/images/pokeball.png')}
					width={24}
					height={24}
				/>
				<ThemedText
					variant="headline"
					color="grayLight">
					Pokédex
				</ThemedText>
			</View>
			<Card style={styles.body}>
				<FlatList
					data={pokemons}
					numColumns={3}
					contentContainerStyle={[styles.gridGap, styles.list]}
					columnWrapperStyle={styles.gridGap}
					renderItem={({ item }) => {
						return (
							<PokemonCard
								key={item.id}
								id={item.id}
								name={item.name}
								style={{ flex: 1 / 3 }}
							/>
						);
					}}
				/>
			</Card>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		gap: 16,
	},
	body: {
		flex: 1,
	},
	gridGap: {
		gap: 8,
	},
	list: {
		padding: 12,
	},
});
