import axios from 'axios';
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants';

export const login =
  ({ username, password }) =>
      async dispatch => {
          try {
              dispatch({
                  type: USER_LOGIN
              });

              const { data } = await axios.post('/auth/signin', { username, password });

              dispatch({
                  type: USER_LOGIN_SUCCESS,
                  payload: data.accessToken
              });
          } catch (error) {
              dispatch({
                  type: USER_LOGIN_FAIL,
                  payload:
          error.message === 'Network Error'
              ? error.message
              : error.response.data.message
              });
          }
      };

export const logout = () => dispatch => {
    dispatch({ type: USER_LOGOUT });
};
