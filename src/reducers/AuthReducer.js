import { EMAIL_CHANGED } from '../actions/types';

const initialState = {
  email: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case EMAIL_CHANGED:
      console.log(payload);
      return { ...state, ...payload }

    default:
      return state
  }
}
