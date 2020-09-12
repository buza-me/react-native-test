import {SET_IS_LOADING} from '../../constants';

const initialState = {
  isLoading: false,
};

export const commonReducer = (state = initialState, {type, payload}) => {
  const newState = {...state};

  if (type === SET_IS_LOADING) {
    newState.isLoading = payload;
  }

  return newState;
};
