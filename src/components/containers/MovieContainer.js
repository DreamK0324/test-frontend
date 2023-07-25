import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { MovieView } from "../views";
import { 
  fetchMovieThunk, 
  fetchUserThunk, 
} from "../../store/thunks";


const MovieContainer = ({ fetchMovie, movie, fetchUser, user }) => {
  const { id } = useParams();

  const [isMovieLoaded, setIsMovieLoaded] = useState(false);

  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  useEffect(() => {
    // Fetch the user only when the movie data is loaded
    if (movie && movie.userId && !isMovieLoaded) {
      fetchUser(movie.userId);
      setIsMovieLoaded(true);
    }
  }, [fetchUser, movie, isMovieLoaded]);

  return (
    <MovieView 
      movie={movie} 
      user={user}
    />
  );
};

// map state to props
const mapState = (state) => {
  return {
    movie: state.movie,
    user: state.user,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
    fetchUser: (userId) => dispatch(fetchUserThunk(userId)),
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);
