import {combineReducers} from 'redux';
import {commonReducer} from './commonReducer';
import {dataReducer} from './dataReducer';

const rootReducer = combineReducers({
  commonReducer,
  dataReducer,
});

export default rootReducer;
