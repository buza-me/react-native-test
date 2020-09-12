import {createAction, getThunkFactory, createLoadingWrapper} from './helpers';
import {GET_PHOTOS, SET_IS_LOADING, API_URL} from '../../constants';

const setIsLoading = createAction(SET_IS_LOADING);
const getPhotos = createAction(GET_PHOTOS);
const thunkFactory = getThunkFactory(createLoadingWrapper(setIsLoading));

export const getPhotosAsync = thunkFactory(async (dispatch, page = 1) => {
  const response = await fetch(`${API_URL}&page=${page}`);
  const {status} = response;
  if (status !== 200) {
    throw new Error('error fetching photos');
  }
  const parsed = await response.json();
  dispatch(getPhotos(parsed));
});
