import {AUTH_LOGIN} from '../constants';
import axios from 'axios';

export const atuhLogin = auth => ({
  type: AUTH_LOGIN,
  auth: auth
});

export const loginUser = user => dispatch => {
  console.log('USER LOGIN', user);
  axios.get('/api/users/login', user);
};
