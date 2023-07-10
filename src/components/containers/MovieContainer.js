import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserThunk, fetchMovieThunk } from "../../store/thunks";
import { MovieView } from "../views";

class MovieContainer extends Component {
  componentDidMount() {
    //getting movie ID from url
    this.props.fetchMovie(this.props.match.params.id);
    this.props.fetchUser(this.props.movie.assigned_to);
  }

  render() {
    return (
      <MovieView 
        movie={this.props.movie}
        user={this.props.user}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    movie: state.movie,
    user: state.user
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
    fetchUser: (assigned_to) => dispatch(fetchUserThunk(assigned_to))
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);