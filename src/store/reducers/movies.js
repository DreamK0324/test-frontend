import * as at from "../actions/actionTypes";

// REDUCER;
const allMovies = (state = [], action) => {
    switch (action.type) {
      case at.FETCH_ALL_MOVIES:
        return action.payload;
      case at.ADD_MOVIE:
        return [...state, action.payload];
      case at.DELETE_MOVIE:
        return state.filter((movie) => movie.id !== action.payload);
      case at.EDIT_MOVIE:
        return state.map((movie) => {
          if (movie.id === action.payload.id) {
            // If the userId is set to null, unassign the movie
            const updatedMovie = {
              ...movie,
              userId: action.payload.userId,
            };
            return updatedMovie;
          } else {
            return movie;
          }
        });
      default:
        return state;
    }
  };
  
  export default allMovies;
  