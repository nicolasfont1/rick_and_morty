//ACÁ CONECTAMOS FRONT-END CON BACK-END
import axios from "axios"
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      });
   };
};

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
   return { type: ORDER, payload: order }
}

//Order va a ser A: ascendente o D: descendente.
//Como devolvemos objetos las action no son asincronas (?).