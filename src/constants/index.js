const cors_anywhere = '';
// const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://pokeapi.co/api/v2/';

export const allPokemons = () => `${base_url}pokemon/`

export const groupedByQuantity = ( untilNumber) => `${base_url}pokemon?offset=0&limit=${untilNumber}`