import { types } from "../types/types";
import { groupedByQuantity } from '../constants/index'

export const getPokemons = (payload) => ({
     type: types.GET_POKEMONS,
     payload,
});
export const getInfoCardThumb = (payload) => ({
     type: types.INFO_CARD_THUMB,
     payload,
})

export const getPokemonsAction = () => async( dispatch, getState ) => {

     try {
          // console.log('datos desde la api');
          const res = await fetch(groupedByQuantity(20));
          const data = await res.json();
          // console.log(data.results)
          dispatch({
               type: types.GET_POKEMONS,
               payload: data

          })

     } catch (error) {
          console.log(error);
     }
}

export const getInfoCard = (url= 'https://pokeapi.co/api/v2/pokemon/1/') => async( dispatch ) => {

     try {
          console.log('datos desde la url');
          const res = await fetch(url);
          const data = await res.json();
          // console.log(data.sprites)
          dispatch({
               // type: types.GET_POKEMONS,
               type: types.INFO_CARD_THUMB,
               payload: {
                    name: data.name,
                    image: data.sprites.other["official-artwork"].front_default
               },

          })

     } catch (error) {
          console.log(error);
     }
}