import { FETCH_USER} from "../actions/actionTypes";

const initialState = {
  movies: [],
};

const USER= (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};

export default USER;