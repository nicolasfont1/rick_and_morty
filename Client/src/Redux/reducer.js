import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharactersFav: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
         return { 
                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload
            }

        case REMOVE_FAV:
            return { 
                ...state,
                myFavorites: action.payload,
                allCharactersFav: action.payload
            }

        case FILTER:
            if(action.payload === "Any"){
                const allChar = state.myFavorites
                return{
                    ...state,
                    allChar
                }
            } else {
                const allCharFiltered = state.allCharactersFav.filter((char) => char.gender === action.payload)
                return{
                    ...state,
                    myFavorites: allCharFiltered
                }}

        case ORDER:
            let allCharFavCopy = [...state.allCharactersFav]
            return{
                ...state,
                myFavorites:
                action.payload === "A" 
                ? allCharFavCopy.sort((a, b) => a.id - b.id)
                : allCharFavCopy.sort((a, b) => b.id - a.id)
            }
        
        default: return{...state}
    }
}

export default reducer

//Se recomienda siempre trabajar con copias del estado {...state}, para evitar pisarlo
//SE ROMPIA PORQUE NUNCA PASASTE ID EN EL MAP DE FAVORITES BOLUDOOO