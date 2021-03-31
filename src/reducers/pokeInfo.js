import { types } from "../types/types";

const initialState = {
     array: []
};
   
export const pokeInfo = (state = initialState, action) => {

     switch (action.type) {
          case types.INFO_CARD_THUMB:
               return {
                    ...state, array: action.payload
               }
          
          default:
               return state;
  }
};