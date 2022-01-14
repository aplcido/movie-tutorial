import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

//initial state
const initialState = {
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const[state, dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state]);

    //actions
    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    const removeMovieFromWatched = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: id})
    }

    return (
        <GlobalContext.Provider value={{watched: state.watched, addMovieToWatched, removeMovieFromWatched}} >
            {props.children}
        </GlobalContext.Provider>
    );

}

