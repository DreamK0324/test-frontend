import React, { Component } from "react";
import { connect } from "react-redux";
import { 
    fetchUserThunk,
    fetchAllMoviesThunk,
    editMovieThunk 
} from "../../store/thunks";

import { UserView } from "../views";

class UserContainer extends Component {
    componentDidMount() {
        //getting user ID from url
        this.props.fetchUser(this.props.match.params.id);
        this.props.fetchMovies();
    }

    render() {
        return (
            <UserView 
                user={this.props.user}
                editMovie={this.props.editMovie}
                allMovies={this.props.allMovies}
            />
        );
    }
}

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