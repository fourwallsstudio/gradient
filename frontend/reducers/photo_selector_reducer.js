import { TOGGLE_PHOTO_SELECTOR } from '../actions/photo_selector_actions';

const photoSelectorReducer = (state = false, action) => {

  switch (action.type) {
    case TOGGLE_PHOTO_SELECTOR:
      return !state;
    default:
      return state;
  }
}

export default photoSelectorReducer;
