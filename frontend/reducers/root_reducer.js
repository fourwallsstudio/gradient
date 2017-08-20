import { combineReducers } from 'redux';
import photoReducer from './photo_reducer';
import photoSelectorReducer from './photo_selector_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  photos: photoReducer,
  photoSelectorActive: photoSelectorReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
