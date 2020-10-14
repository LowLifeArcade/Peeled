import {
  FETCH_PEEL,
  FETCH_PEELS,
  CREATE_PEEL,
  EDIT_PEEL,
  DELETE_PEEL
} from '../actions/types';
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PEELS:
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    case FETCH_PEEL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PEEL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PEEL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PEEL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}