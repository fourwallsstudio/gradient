import { UPDATE_LOADING_STATUS } from '../actions/loading_actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {

    case UPDATE_LOADING_STATUS:
      return !state;

    default:
      return state;
  }
}

export default loadingReducer;
