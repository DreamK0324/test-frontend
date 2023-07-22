import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { editMovie } from "../../store/actions/actionCreators";
import { UserView } from "../views";
import { 
  fetchUserThunk,
  fetchAllMoviesThunk,
  editMovieThunk,
} from "../../store/thunks";



const UserContainer = ({ fetchUser, user, allMovies, fetchMovies }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchUser(id);
    fetchMovies();
  }, [fetchUser, fetchMovies, id]);

  return (
    <UserView 
      user={user}
      editMovie={editMovie}
      allMovies={allMovies}
    />
  );
};

// map state to props
const mapState = (state) => {
  return {
    user: state.user,
    allMovies: state.allMovies,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
    editMovie: (movie) => dispatch(editMovieThunk(movie)),
    fetchMovies: () => dispatch(fetchAllMoviesThunk()),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);
