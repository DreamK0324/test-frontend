import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All users
export const fetchAllUsers = (users) => {
    return {
        type: at.FETCH_ALL_USERS,
        payload: users,
    };
};

// Add User
export const addUser = (user) => {
    return {
        type: at.ADD_USER,
        payload: user,
    };
};

// Delete User
export const deleteUser = (userId) => {
    return {
        type: at.DELETE_USER,
        payload: userId,
    };
};

// Edit User
export const editUser = (user) => {
    return {
        type: at.EDIT_USER,
        payload: user,
    };
};

//Single user
export const fetchUser = (user) => {
    return {
        type: at.FETCH_USER,
        payload: user,
    };
};

////////////////////////////////////////////////////////////////

//All movies
export const fetchAllMovies = (movies) => {
    return {
        type: at.FETCH_ALL_MOVIES,
        payload: movies,
    };
};

export const addMovie = (movie) => {
    return {
        type: at.ADD_MOVIE,
        payload: movie,
    };
};

export const deleteMovie = (movieId) => {
    return {
        type: at.DELETE_MOVIE,
        payload: movieId,
    };
};


export const editMovie = (movie) => {
    return {
        type: at.EDIT_MOVIE,
        payload: movie,
    };
};

//Single movie
export const fetchMovie = (movie) => {
    return {
        type: at.FETCH_MOVIE,
        payload: movie,
    };
};
