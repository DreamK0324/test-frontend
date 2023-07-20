import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchAllMoviesThunk,
  deleteMovieThunk
} from '../../store/thunks';

import AllMoviesView from '../views/AllMoviesView';

const AllMoviesContainer = ({ fetchAllMovies, allMovies, deleteMovie }) => {
  useEffect(() => {
    fetchAllMovies();
  }, [fetchAllMovies]);

  return (
    <div>
      <AllMoviesView
        movies={allMovies}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};

// Map state to props;
const mapState = (state) => {
  return {
    allMovies: state.allMovies,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllMovies: () => dispatch(fetchAllMoviesThunk()),
    deleteMovie: (movieId) => dispatch(deleteMovieThunk(movieId)),
  };
};

export default connect(mapState, mapDispatch)(AllMoviesContainer);


