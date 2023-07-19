import { FETCH_MOVIE } from "../actions/actionTypes";

const initialState = {
     user: {},
};

// REDUCER;
const movie = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return action.payload;
        default:
            return state;
    }
};

export default movie;