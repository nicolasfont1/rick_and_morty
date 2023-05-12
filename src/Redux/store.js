import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//linea para configurar devtool del navegador

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);
//la linea 10 permite hacer peticiones a un servidor externo