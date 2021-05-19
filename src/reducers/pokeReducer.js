import { types } from "../types/types";

const initialState = {
  allPokemons: [],
  allPokemonsResult: [],
  selectedPokemon: [],
  count: 0,
  next: null,
  previous: null,
  results: [],
  loading: true,
  error: false,
  searchMode: false,
  favoritesPokemons: [],
  setPage:'/',
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POKEMONS:
      return {
        ...state,
        ...action.payload,
      };
    case types.INFO_CARD_THUMB:
      return {
        ...state,
        allPokemons: [...state.allPokemons, action.payload],
      };
    case types.RESET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: [],
      };
    case types.NEXT_POKEMONS:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOAD_AUTOCOMPLETE:
      return {
        ...state,
        allPokemonsResult: action.payload,
      };
    case types.SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: [action.payload],
        // allPokemons: [action.payload],
      };
      case types.CLEAN_SELECTED_POKEMON:
        return {
          ...state,
          selectedPokemon: [],
          // allPokemons: [action.payload],
        };
    case types.ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOADING:
      return {
        ...state,
        ...action.payload,
      };
    case types.SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload,
      };
    case types.CLEAN_STATE:
      return {
        ...state,
        allPokemons: [],
        // selectedPokemon: [],
      };
    case types.SET_FAVORITE_POKEMON:
      return {
        ...state,
        favoritesPokemons: [...state.favoritesPokemons, action.payload],
      };
    case types.UNSET_FAVORITE_POKEMON:
      return {
        ...state,
        favoritesPokemons: state.favoritesPokemons.filter(
          (items) => items.id !== action.payload
        ),
      };
      case types.SET_PAGE:
        return {
          ...state,
          setPage: action.payload,
        };
    default:
      return state;
  }
};

//  default pokeReducer
