import * as at from "../actions/actionTypes";

// REDUCER;
const allMovies = (state=[], action) => {
    switch (action.type) {
        case at.FETCH_ALL_MOVIES:
            return action.payload;
        case at.ADD_MOVIE:
            return [...state, action.payload]
        case at.DELETE_MOVIE:
            return state.filter(movie => movie.id!==action.payload);
        case at.EDIT_MOVIE:
            return state.map(movie => { 
                return (
                    movie.id===action.payload.id ? action.payload : movie
                );
            });
        default:
            return state;
    }
};

export default allMovies;