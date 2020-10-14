import peels from '../apis/peels'
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PEEL,
  FETCH_PEELS,
  FETCH_PEEL,
  DELETE_PEEL,
  EDIT_PEEL
} from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createPeel = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await peels.post('/peels', { ...formValues, userId });

  dispatch({ type: CREATE_PEEL, payload: response.data });
  history.push('/');
};

export const fetchPeels = () => async dispatch => {
  const response = await peels.get('/peels');

  dispatch({ type: FETCH_PEELS, payload: response.data });
}

export const fetchPeel = (id) => async dispatch => {
  const response = await peels.get(`/peels/${id}`)

  dispatch({ type:FETCH_PEEL, payload: response.data })
}

export const editPeel = (id, formValues) => async dispatch => {
  const response = await peels.patch(`/peels/${id}`, formValues);

  dispatch({ type:EDIT_PEEL, payload: response.data });
  history.push('/');
}

export const deletePeel = (id) => async dispatch => {
  await peels.delete(`/peels/${id}`);

  dispatch({ type: DELETE_PEEL, payload: id })
}

