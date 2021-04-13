import { types } from "../types/types";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";

export const getPokemons = (payload) => ({
  type: types.GET_POKEMONS,
  payload,
});
export const getInfoCardThumb = (payload) => ({
  type: types.INFO_CARD_THUMB,
  payload,
});

export const getPokemonsAction = () => async (dispatch, getState) => {
//   const offset = getState().pokemones.offset;
  // console.log(offset);
  try {
    // console.log('datos desde la api');
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    const data = await res.json();
//     console.log(data)
    dispatch({
      type: types.GET_POKEMONS,
      payload: data,
    });
    dispatch({
     type: types.ERROR,
         payload: {
          error: false
         }
    });
    dispatch({
     type: types.LOADING,
         payload: {
          loading: false
     },
   });
       
    if (data.results.length) {
      data.results.map(async (pokedata) => {
        const responseDetails = await axios.get(pokedata.url);
        // console.log(responseDetails);
        dispatch({
          type: types.INFO_CARD_THUMB,
          payload: {
            data: responseDetails.data,
            types:responseDetails.data.types,
            name: responseDetails.data.species.name,
            id: responseDetails.data.id,
            image: responseDetails.data.sprites.other["official-artwork"].front_default,
          },
        });
      });
    }
  } catch (error) {
       console.log(error);
       dispatch({
          type: types.ERROR,
              payload: {
               error: error
              }
         });
  }
};

export const nextPokemonAction = () => async (dispatch, getState) => {

//   const offset = getState().pokemones.offset;
//      const next = offset + number;
     const next = getState().pokemones.next

  try {
    const res = await fetch( next );
    const data = await res.json();
    dispatch({
         type: types.NEXT_POKEMONS,
         payload: data
     //      payload: {
     //          results: data.results,
     //          offset:next
     //  }
    });
       
       if (data.results.length) {

          dispatch({
               type: types.RESET_ALL_POKEMONS,
               payload: {
                   offset:next
           }
         });
         
     data.results.map(async (pokedata) => {
       const responseDetails = await axios.get(pokedata.url);
       // console.log(responseDetails);
       dispatch({
        type: types.INFO_CARD_THUMB,
        payload: {
          data: responseDetails.data,
          types:responseDetails.data.types,
          name: responseDetails.data.species.name,
          id: responseDetails.data.id,
          image: responseDetails.data.sprites.other["official-artwork"].front_default,
        },
      });
     });
   }
       
  } catch (error) {
    console.log(error);
  }
};

export const previousPokemonAction = () => async (dispatch, getState) => {
     
     const previous = getState().pokemones.previous

     try {
          const res = await fetch( previous );
          const data = await res.json();
          dispatch({
               type: types.NEXT_POKEMONS,
               payload: data
           //      payload: {
           //          results: data.results,
           //          offset:next
           //  }
          });
             
             if (data.results.length) {
      
                dispatch({
                     type: types.RESET_ALL_POKEMONS,
                     payload: {
                         offset: previous
                 }
               });
               
           data.results.map(async (pokedata) => {
             const responseDetails = await axios.get(pokedata.url);
             // console.log(responseDetails);
             dispatch({
              type: types.INFO_CARD_THUMB,
              payload: {
                data: responseDetails.data,
                types:responseDetails.data.types,
                name: responseDetails.data.species.name,
                id: responseDetails.data.id,
                image: responseDetails.data.sprites.other["official-artwork"].front_default,
              },
            });
           });
         }
             
        } catch (error) {
          console.log(error);
        }
}

export const autocompletePokemonAction = (pokeCounter, search) => async (dispatch, getState) => {
  //   const offset = getState().pokemones.offset;
    // console.log(offset);

  try {
    // console.log('datos desde la api');
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pokeCounter}`
    );
    const data = await res.json();
    const resultsPokemons = data.results

  //   const resultSearch = resultsPokemons.filter( item => { 
  //     const regex = new RegExp( search, 'gi')
  //     return item.name.match(regex)
  // })
      // console.log(resultSearch)

      dispatch({
        type: types.LOAD_AUTOCOMPLETE,
        payload: resultsPokemons,
      });
      dispatch({
       type: types.ERROR,
           payload: {
            error: false
           }
      });
      dispatch({
       type: types.LOADING,
           payload: {
            loading: false
       },
     });
         
    } catch (error) {
         console.log(error);
         dispatch({
            type: types.ERROR,
                payload: {
                 error: error
                }
           });
    }
};
  
export const loadSearchedPokemonAction = (url) => async (dispatch) => {
  //   const offset = getState().pokemones.offset;
    // console.log(offset);

  try {
    // console.log('datos desde la api');
    const res = await fetch( url );
    const data = await res.json();
    const resultPokemon = data
    console.log(resultPokemon);
    
  //   const resultSearch = resultsPokemons.filter( item => { 
  //     const regex = new RegExp( search, 'gi')
  //     return item.name.match(regex)
  // })
      // console.log(resultSearch)

      // dispatch({
      //   type: types.SELECTED_POKEMON,
      //   payload: resultPokemon,
      // });
      dispatch({
        type: types.SELECTED_POKEMON,
        payload: {
          data: resultPokemon,
          types:resultPokemon.types,
          name: resultPokemon.species.name,
          id: resultPokemon.id,
          image: resultPokemon.sprites.other["official-artwork"].front_default,
        },
      });
      dispatch({
       type: types.ERROR,
           payload: {
            error: false
           }
      });
      dispatch({
       type: types.LOADING,
           payload: {
            loading: false
       },
     });
         
    } catch (error) {
         console.log(error);
         dispatch({
            type: types.ERROR,
                payload: {
                 error: error
                }
           });
    }
  };