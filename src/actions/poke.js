import { types } from "../types/types";
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
       
    if (data.results.length) {
      data.results.map(async (pokedata) => {
        const responseDetails = await axios.get(pokedata.url);
        // console.log(responseDetails);
        dispatch({
          type: types.INFO_CARD_THUMB,
          payload: {
            name: responseDetails.data.species.name,
            id: responseDetails.data.id,
            image:
              responseDetails.data.sprites.other["official-artwork"]
                .front_default,
          },
        });
      });
    }
  } catch (error) {
    console.log(error);
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
           name: responseDetails.data.species.name,
           id: responseDetails.data.id,
           image:
             responseDetails.data.sprites.other["official-artwork"]
               .front_default,
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
                 name: responseDetails.data.species.name,
                 id: responseDetails.data.id,
                 image:
                   responseDetails.data.sprites.other["official-artwork"]
                     .front_default,
               },
             });
           });
         }
             
        } catch (error) {
          console.log(error);
        }
}
// export const getInfoCard = () => async( dispatch, getState ) => {

//      try {
//           // console.log('datos desde la api');
//           // const res = await fetch(groupedByQuantity(20));
//           // const data = await res.json();
//           // const primaryData = data.results
//           // console.log(primaryData)
//           const primaryData = useSelector( state => state.results)

//           primaryData.map(async (pokedata) => {
//                const responseDetails = await axios.get(pokedata.url);
//                // console.log(responseDetails);

//                dispatch({
//                     type: types.INFO_CARD_THUMB,
//                     payload: {
//                          name: responseDetails.data.species.name,
//                          id: responseDetails.data.id,
//                          image: responseDetails.data.sprites.other["official-artwork"].front_default
//                     },

//                })

//           })

//      } catch (error) {
//           console.log(error);
//      }
// }

// export const getInfoCard = (url= 'https://pokeapi.co/api/v2/pokemon/1/') => async( dispatch ) => {

//      try {
//           console.log('datos desde la url');
//           const res = await fetch(url);
//           const data = await res.json();
//           // console.log(data.sprites)
//           dispatch({

//                type: types.INFO_CARD_THUMB,
//                payload: {
//                     name: data.name,
//                     id: data.id,
//                     image: data.sprites.other["official-artwork"].front_default
//                },

//           })

//      } catch (error) {
//           console.log(error);
//      }
// }

// export const fetchPokemonNameUrl = (url= 'https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch) => {

//      try {
//           const response = await axios.get(url);
//           const data = response.data.results;
//           console.log(data);

//           data.map(async (poke) => {
//             const responseDetails = await axios.get(poke.url);

//           //   let tempDetails = {
//           //     name: responseDetails.data.species.name,
//           //     baseExperience: responseDetails.data.base_experience,
//           //     height: responseDetails.data.height,
//           //     weight: responseDetails.data.weight,
//           //     type: responseDetails.data.types[0].type.name,
//           //     sprites: responseDetails.data.sprites.front_default,
//           //   };

//                // dispatch(tempDetails)

//                dispatch({
//                     type: types.INFO_CARD_THUMB,
//                     payload: {
//                          name: responseDetails.data.species.name,
//                          baseExperience: responseDetails.data.base_experience,
//                          height: responseDetails.data.height,
//                          weight: responseDetails.data.weight,
//                          type: responseDetails.data.types[0].type.name,
//                          sprites: responseDetails.data.sprites.front_default,
//                     },

//                })
//           });

//      } catch (error) {
//           console.log(error);
//      }

//    };
