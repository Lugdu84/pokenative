import { types } from '@babel/core';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const endpoint = 'https://pokeapi.co/api/v2/';

type API = {
	'pokemon?limit=21': {
		count: number;
		next: string | null;
		results: { name: string; url: string }[];
	};
	'pokemon/[id]': {
		id: number;
		name: string;
		url: string;
		weight: number;
		height: number;
		moves: { move: { name: string } }[];
		stats: { base_stat: number; stat: { name: string } }[];
		cries: { latest: string };
		types: { type: { name: string } }[];
	};
};

export const useFetchQuery = <T extends keyof API>(query: T) => {
	return useQuery({
		queryKey: [query],
		queryFn: async () => {
			return fetch(`${endpoint}${query}`, {
				headers: { Accept: 'application/json' },
			}).then((res) => res.json() as Promise<API[T]>);
		},
	});
};

export const useInfiniteFetchQuery = <T extends keyof API>(query: T) => {
	return useInfiniteQuery({
		queryKey: [query],
		initialPageParam: endpoint + query,
		queryFn: async ({ pageParam }) => {
			return fetch(pageParam, { headers: { Accept: 'application/json' } }).then(
				(res) => res.json() as Promise<API[T]>
			);
		},
		getNextPageParam: (lastPage) => {
			if ('next' in lastPage) {
				return lastPage.next;
			}
			return null;
		},
	});
};
