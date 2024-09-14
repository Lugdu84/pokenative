import Card from '@/components/Card';
import PokemonCard from '@/components/pokemon/PokemonCard';
import SearchBar from '@/components/SearchBar';
import ThemedText from '@/components/ThemedText';
import { getPokemonId } from '@/functions/pokemons';
import { useFetchQuery, useInfiniteFetchQuery } from '@/hooks/useFetchQuery';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	StyleSheet,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const { data, isFetching, fetchNextPage } =
		useInfiniteFetchQuery('pokemon?limit=21');
	const pokemons = data?.pages.flatMap((page) => page.results) ?? [];
	const colors = useThemeColors();
	const [search, setSearch] = useState('');
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
			<View>
				<SearchBar
					value={search}
					onChange={setSearch}
				/>
			</View>
			<Card style={styles.body}>
				<FlatList
					data={pokemons}
					numColumns={3}
					contentContainerStyle={[styles.gridGap, styles.list]}
					columnWrapperStyle={styles.gridGap}
					ListFooterComponent={
						isFetching ? <ActivityIndicator color={colors.tint} /> : null
					}
					onEndReached={() => fetchNextPage()}
					renderItem={({ item }) => {
						return (
							<PokemonCard
								key={item.url}
								id={getPokemonId(item.url)}
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
