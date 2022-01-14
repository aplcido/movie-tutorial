import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

//initial state
const initialState = {
    watched: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const[state, dispatch] = useReducer(AppReducer,initialState);

    //actions
    const addMovieToWatched = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    return (
        <GlobalContext.Provider value={{watched: state.watched, addMovieToWatched}} >
            {props.children}
        </GlobalContext.Provider>
    );

}

