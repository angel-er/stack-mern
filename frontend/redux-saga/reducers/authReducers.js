import {AUTH_LOGIN} from '../constants';

const initialState = {
  auth: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        aut: action.payload
      };
    default:
      return state;
  }
};
