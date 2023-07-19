import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchMovieThunk } from "../../store/thunks";
import { MovieView } from "../views";

const MovieContainer = ({ fetchMovie, movie }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  return (
    <MovieView movie={movie} />
  );
};

// map state to props
const mapState = (state) => {
  return {
    movie: state.movie,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);
