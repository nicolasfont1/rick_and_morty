import { ADD_FAV, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload))
            }
        
        default: return{...state}
    }
}

export default reducer

//PUEDE QUE REMOVE NO FUNCIONE PORQUE ID DE PAYLOAD ES STR Y EL ID DE CHAR ES INT
//Se recomienda siempre trabajar con copias del estado {...state}, para evitar pisarlo
//SE ROMPIA PORQUE NUNCA PASASTE ID EN EL MAP DE FAVORITES BOBOOOO