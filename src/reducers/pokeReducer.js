import { types } from "../types/types";

const initialState = {
  allPokemons: [],
  allPokemonsResult: [],
  selectedPokemon:[],
  count: 0,
  next: null,
  previous: null,
  results: [],
  loading: true,
  error: false,
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
        //    unPokemon: action.payload
      };
    case types.RESET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: [],
        //    unPokemon: action.payload
      };
    case types.NEXT_POKEMONS:
      return {
        ...state,
        ...action.payload,
        //  offset: action.payload.offset
        //    unPokemon: action.payload
      };
      case types.LOAD_AUTOCOMPLETE:
        return {
          ...state,
          allPokemonsResult:action.payload
        };
        case types.SELECTED_POKEMON:
          return {
            ...state,
            selectedPokemon: action.payload,
            allPokemons: [action.payload],
          };
    case types.ERROR:
      return {
        ...state,
        ...action.payload,
      }
    case types.LOADING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

//  default pokeReducer
