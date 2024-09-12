import { useQuery } from '@tanstack/react-query';

const endpoint = 'https://pokeapi.co/api/v2';

export const useFetchQuery = (query: string) => {
	return useQuery({
		queryKey: [query],
		queryFn: async () => {
			return fetch(`${endpoint}/${query}`).then((res) => res.json());
		},
	});
};
