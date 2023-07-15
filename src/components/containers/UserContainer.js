import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchUserThunk } from "../../store/thunks";
import { UserView } from "../views";

const UserContainer = ({ fetchUser, user }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchUser(id);
  }, [fetchUser, id]);

  return (
    <UserView user={user} />
  );
};

// map state to props
const mapState = (state) => {
  return {
    user: state.user,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);
