// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { 
//     fetchUserThunk,
//     fetchAllMoviesThunk,
//     editMovieThunk 
// } from "../../store/thunks";

// import { UserView } from "../views";

// class UserContainer extends Component {
//     componentDidMount() {
//         //getting user ID from url
//         this.props.fetchUser(this.props.match.params.id);
//         this.props.fetchMovies();
//     }

//     render() {
//         return (
//             <UserView 
//                 user={this.props.user}
//                 editMovie={this.props.editMovie}
//                 allMovies={this.props.allMovies}
//             />
//         );
//     }
// }

// // map state to props
// const mapState = (state) => {
//     return {
//         user: state.user,
//         // allMovies: state.allMovies,

//     };
// };

// // map dispatch to props
// const mapDispatch = (dispatch) => {
//     return {
//         fetchUser: (id) => dispatch(fetchUserThunk(id)),
//         // editMovie: (movie) => dispatch(editMovieThunk(movie)),
//         // fetchMovies: () => dispatch(fetchAllMoviesThunk()),

//     };
// };

// export default connect(mapState, mapDispatch)(UserContainer);

//////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import { fetchUserThunk } from '../../store/thunks';

// import UserView from '../views/UserView';

// const UserContainer = ({ userId, fetchUser, user }) => {
//   useEffect(() => {
//     fetchUser(userId);
//   }, [fetchUser, userId]);

//   return (
//     <div>
//       <UserView 
//         user={user} 
//         />
//     </div>
//   );
// };

// const mapStateToProps = (state, ownProps) => {
//   const { match } = ownProps;
//   const userId = match?.params?.id;
//   return {
//     userId,
//     user: state.user,
//   };
// };
  

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: (userId) => dispatch(fetchUserThunk(userId)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);


//////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserThunk, deleteUserThunk } from "../../store/thunks";
import UserView from "../views/UserView";

const UserContainer = ({ userId, fetchUser, user, deleteUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, [fetchUser, userId]);

  return (
    <div>
      <UserView user={user} deleteUser={deleteUser} />
    </div>
  );
};

// Map state to props
const mapState = (state, ownProps) => {
  const { match } = ownProps;
  const userId = match?.params?.id;
  console.log('State:', state); // Check the entire state object
  console.log('User:', state.user); // Check the user property specifically
  console.log('User ID:', userId); // Check the extracted user ID
  return {
    userId,
    user: state.user,
  };
};


// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUserThunk(userId)),
    deleteUser: (userId) => dispatch(deleteUserThunk(userId)),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);
