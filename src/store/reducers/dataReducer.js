import {GET_PHOTOS} from '../../constants';

const initialState = {
  photos: [],
};

export const dataReducer = (state = initialState, {type, payload = []}) => {
  const newState = {...state};

  if (type === GET_PHOTOS) {
    newState.photos = [
      ...newState.photos,
      ...payload.filter(
        (item) => !newState.photos.some((oldItem) => oldItem.id === item.id),
      ),
    ];
  }

  return newState;
};
