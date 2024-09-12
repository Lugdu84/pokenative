export const getPokemonId = (url: string) => {
	return parseInt(url.split('/').at(-2)!, 10);
};
