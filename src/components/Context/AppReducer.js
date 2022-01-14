export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHED":
            return {...state, watched: [action.payload, ...state.watched]}
        default:
            return state;

    }
}