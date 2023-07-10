import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersThunk, deleteUserThunk } from "../../store/thunks";
import { AllUsersView } from "../views";
import { connect } from 'react-redux';

const AllUsersContainer = ({ fetchAllUsers, allUsers, deleteUser }) => {
  useEffect(() => {
    fetchAllUsers()
  }, [fetchAllUsers]);

  return (
    <div>
      <AllUsersView
        users={allUsers}
        deleteUser={deleteUser}
      />
    </div>
  );
};

// Map state to props;
const mapState = (state) => {
  return {
    allUsers: state.allUsers,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
    deleteUser: (userId) => dispatch(deleteUserThunk(userId)),
  };
};

export default connect(mapState, mapDispatch)(AllUsersContainer);