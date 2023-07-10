import * as ac from './actions/actionCreators';
import axios from 'axios';


//PATH (should be where your server is running)
let path = "http://localhost:5001/api";


// THUNKS

//All users
export const fetchAllUsersThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/users`);
    dispatch(ac.fetchAllUsers(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single user
export const fetchUserThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/users/${id}`)
  //   .then((res) => res.data)
  //   .then((user) => dispatch(ac.fetchUser(user)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`${path}/users/${id}`);
    dispatch(ac.fetchUser(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Add User
export const addUserThunk = (user) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/instructors/${id}`)
  //   .then((res) => res.data)
  //   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
  //   .catch((err) => console.log(err));
  try {
    //let res = await axios.post(`${path}/users/${userId}`);
    let res = await axios.post(`${path}/users`, user);
    dispatch(ac.addUser(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Delete User
export const deleteUserThunk = userId => async dispatch => {
  try {
    await axios.delete(`${path}/users/${userId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteUser(userId));
  } catch(err) {
    console.error(err);
  }
};

// Edit User
export const editUserThunk = user => async dispatch => {
  try {
    let res = await axios.put(`${path}/users/${user.id}`, user);
    //res.data is the updated course object
    dispatch(ac.editUser(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All movies
export const fetchAllMoviesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/movies`);
    dispatch(ac.fetchAllMovies(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addMovieThunk = (movie) => async (dispatch) => {
  // movie = { title: "CSCI 127" }
  try {
    let res = await axios.post(`${path}/movies`, movie);
    dispatch(ac.addMovie(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteMovieThunk = movieId => async dispatch => {
  try {
    await axios.delete(`${path}/movies/${movieId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteMovie(movieId));
  } catch(err) {
    console.error(err);
  }
};

export const editMovieThunk = movie => async dispatch => {
  try {
    let res = await axios.put(`${path}/movies/${movie.id}`, movie);
    //res.data is the updated movie object
    dispatch(ac.editMovie(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single movie
export const fetchMovieThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/movies/${id}`);
    dispatch(ac.fetchMovie(res.data));
  } catch(err) {
    console.error(err);
  }
};
