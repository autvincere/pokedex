import { types } from "../types/types";

export const getPokemons = (payload) => ({
  type: types.GET_POKEMONS,
  payload,
});

export const getInfoCardThumb = (payload) => ({
  type: types.INFO_CARD_THUMB,
  payload,
});

export const SetFavoritePokemon = (payload) => ({
  type: types.SET_FAVORITE_POKEMON,
  payload,
});

export const UnSetFavoritePokemon = (payload) => ({
  type: types.UNSET_FAVORITE_POKEMON,
  payload,
});

export const setPage = (payload) => ({
  type: types.SET_PAGE,
  payload,
});
export const cleanSelectedPokemon = (payload) => ({
  type: types.CLEAN_SELECTED_POKEMON,
  payload,
});
export const searchValue = (payload) => ({
  type: types.SEARCH_VALUE,
  payload,
});

export const getPokemonsAction = () => async (dispatch, getState) => {

  if (localStorage.getItem('offset=GET_POKEMONS')) {
    console.log('datos guardados');
    dispatch({
         type: types.GET_POKEMONS,
         payload: JSON.parse(localStorage.getItem('offset=GET_POKEMONS'))
    })
    return
}
  try {
    // console.log('datos desde la api');
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    const data = await res.json();
    dispatch({
      type: types.CLEAN_STATE,
      payload: "",
    });

    //     console.log(data)
    dispatch({
      type: types.GET_POKEMONS,
      payload: data,
    });
    localStorage.setItem('offset=GetPokemons', JSON.stringify(data))

    dispatch({
      type: types.ERROR,
      payload: {
        error: false,
      },
    });
    dispatch({
      type: types.LOADING,
      payload: {
        loading: false,
      },
    });

    if (data.results.length) {
      
      data.results.map(async (pokedata) => {
        const res = await fetch(pokedata.url);
        const responseDetails = await res.json();
        // console.log(responseDetails);
        // localStorage.setItem('offset=INFO_CARD_THUMB', JSON.stringify(responseDetails))

        dispatch({
          type: types.INFO_CARD_THUMB,
          payload: {
            data: responseDetails,
            types: responseDetails.types,
            name: responseDetails.species.name,
            id: responseDetails.id,
            image:
              responseDetails.sprites.other["official-artwork"].front_default,
          },
        });
        // localStorage.setItem('offset=INFO_CARD_THUMB', JSON.stringify([responseDetails]))
      });

      
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.ERROR,
      payload: {
        error: error,
      },
    });
  }
};

export const nextPokemonAction = () => async (dispatch, getState) => {
  const next = getState().pokemones.next;

  try {
    const res = await fetch(next);
    const data = await res.json();
    dispatch({
      type: types.NEXT_POKEMONS,
      payload: data,
      //      payload: {
      //          results: data.results,
      //          offset:next
      //  }
    });

    if (data.results.length) {
      dispatch({
        type: types.RESET_ALL_POKEMONS,
        payload: {
          offset: next,
        },
      });

      data.results.map(async (pokedata) => {
        const res = await fetch(pokedata.url);
        const responseDetails = await res.json();
        // console.log(responseDetails);
        dispatch({
          type: types.INFO_CARD_THUMB,
          payload: {
            data: responseDetails,
            types: responseDetails.types,
            name: responseDetails.species.name,
            id: responseDetails.id,
            image:
              responseDetails.sprites.other["official-artwork"].front_default,
          },
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const previousPokemonAction = () => async (dispatch, getState) => {
  const previous = getState().pokemones.previous;

  try {
    const res = await fetch(previous);
    const data = await res.json();
    dispatch({
      type: types.NEXT_POKEMONS,
      payload: data,
    });

    if (data.results.length) {
      dispatch({
        type: types.RESET_ALL_POKEMONS,
        payload: {
          offset: previous,
        },
      });

      data.results.map(async (pokedata) => {
        const res = await fetch(pokedata.url);
        const responseDetails = await res.json();
        // console.log(responseDetails);
        dispatch({
          type: types.INFO_CARD_THUMB,
          payload: {
            data: responseDetails,
            types: responseDetails.types,
            name: responseDetails.species.name,
            id: responseDetails.id,
            image:
              responseDetails.sprites.other["official-artwork"].front_default,
          },
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const autocompletePokemonAction =
  (pokeCounter, search) => async (dispatch, getState) => {

    if (localStorage.getItem('offset=LOAD_AUTOCOMPLETE')) {
      console.log('AUTOCOMPLETE guardado');
      dispatch({
           type: types.LOAD_AUTOCOMPLETE,
           payload: JSON.parse(localStorage.getItem('offset=LOAD_AUTOCOMPLETE'))
      })
      return
 }

    try {
      // console.log('datos desde la api');
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pokeCounter}`
      );
      const data = await res.json();
      const resultsPokemons = data.results;

      dispatch({
        type: types.LOAD_AUTOCOMPLETE,
        payload: resultsPokemons,
      });
      localStorage.setItem('offset=LOAD_AUTOCOMPLETE', JSON.stringify(resultsPokemons))

      dispatch({
        type: types.ERROR,
        payload: {
          error: false,
        },
      });
      dispatch({
        type: types.LOADING,
        payload: {
          loading: false,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.ERROR,
        payload: {
          error: error,
        },
      });
    }
  };

export const loadSearchedPokemonAction = (url) => async (dispatch) => {
  //   const offset = getState().pokemones.offset;
  // console.log(offset);

  try {
    // console.log('datos desde la api');
    const res = await fetch(url);
    const data = await res.json();
    const resultPokemon = data;
    // console.log(resultPokemon);
    dispatch({
      type: types.SELECTED_POKEMON,
      payload: {
        data: resultPokemon,
        types: resultPokemon.types,
        name: resultPokemon.species.name,
        id: resultPokemon.id,
        image: resultPokemon.sprites.other["official-artwork"].front_default,
      },
    });
    dispatch({
      type: types.ERROR,
      payload: {
        error: false,
      },
    });
    dispatch({
      type: types.LOADING,
      payload: {
        loading: false,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.ERROR,
      payload: {
        error: error,
      },
    });
  }
};
