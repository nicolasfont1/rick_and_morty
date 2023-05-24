//ACÁ CONECTAMOS FRONT-END CON BACK-END
import axios from "axios"
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const { data } = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
            })
      }
   } catch (error) {
      window.alert(error.message)
   }
};

export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
         };
   } catch (error) {
      return window.alert(error.message)
   }
};

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
   return { type: ORDER, payload: order }
}

//Order va a ser A: ascendente o D: descendente.
//Como devolvemos objetos las action no son asincronas (?).