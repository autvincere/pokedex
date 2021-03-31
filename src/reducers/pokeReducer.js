import { types } from "../types/types";

// const initialState = {
//   count: 0,
//   next: null,
//   previous: null,
//   results: [],
//   favoriteCharacters: []
// };

export const pokeReducer = (state , action) => {
  switch (action.type) {
    case types.GET_POKEMONS:
      return {
        ...state,
        ...action.payload,
      };
    case types.INFO_CARD_THUMB:
      return {
           ...state,
           favoriteCharacters: [...state.favoriteCharacters, action.payload],
     //    unPokemon: action.payload
      };

    default:
      return state;
  }
};

//  default pokeReducer
