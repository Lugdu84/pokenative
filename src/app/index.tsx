import Card from '@/components/Card';
import PokemonCard from '@/components/pokemon/PokemonCard';
import RootView from '@/components/RootView';
import Row from '@/components/Row';
import SearchBar from '@/components/SearchBar';
import SortButton from '@/components/SortButton';
import ThemedText from '@/components/ThemedText';
import { getPokemonId } from '@/functions/pokemons';
import { useInfiniteFetchQuery } from '@/hooks/useFetchQuery';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
	const { data, isFetching, fetchNextPage } =
		useInfiniteFetchQuery('pokemon?limit=21');
	const pokemons =
		data?.pages.flatMap((page) =>
			page.results.map((r) => ({ ...r, id: getPokemonId(r.url) }))
		) ?? [];
	const colors = useThemeColors();
	const [search, setSearch] = useState('');
	const [sortKey, setSortKey] = useState<'id' | 'name'>('id');
	const filteredPokemons = [
		...pokemons.filter(
			(pokemon) =>
				pokemon.name.includes(search.toLowerCase()) ||
				pokemon.id.toString() === search
		),
	].sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));
	return (
		<RootView>
			<Row
				style={styles.header}
				gap={16}>
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
			</Row>
			<Row gap={16}>
				<SearchBar
					value={search}
					onChange={setSearch}
				/>
				<SortButton
					value={sortKey}
					onChange={setSortKey}
				/>
			</Row>
			<Card style={styles.body}>
				<FlatList
					data={filteredPokemons}
					numColumns={3}
					contentContainerStyle={[styles.gridGap, styles.list]}
					columnWrapperStyle={styles.gridGap}
					ListFooterComponent={
						isFetching ? <ActivityIndicator color={colors.tint} /> : null
					}
					onEndReached={search ? undefined : () => fetchNextPage()}
					renderItem={({ item }) => {
						return (
							<PokemonCard
								id={item.id}
								name={item.name}
								style={{ flex: 1 / 3 }}
							/>
						);
					}}
					keyExtractor={(item) => item.id.toString()}
				/>
			</Card>
		</RootView>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 12,
		paddingVertical: 8,
	},
	body: {
		flex: 1,
		marginTop: 24,
	},
	gridGap: {
		gap: 8,
	},
	list: {
		padding: 12,
	},
});
