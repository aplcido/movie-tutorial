export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHED":
            return {...state, watched: [action.payload, ...state.watched]}
        case "REMOVE_MOVIE_FROM_WATCHED":
            console.log("teste",action);
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload),
              };
        default:
            return state;

    }
}