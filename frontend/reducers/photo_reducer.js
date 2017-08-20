import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  SELECT_CURRENT_PHOTO,
  UPDATE_PAGE,
  REACHED_MAX_PAGE,
} from '../actions/photo_actions';



const defaultState = {
  entities: {},
  photoIds: [],
  currentPhoto: null,
  page: 0,
  reachedMaxPage: false,
}

const photoReducer = (state = defaultState, action) => {
  const entities = Object.assign({}, state.entities);
  const photoIds = Object.assign([], state.photoIds);

  switch (action.type) {

    case RECEIVE_PHOTOS:
      action.photos.forEach( (p) => {
        entities[p.id] = p;
        photoIds.push(p.id);
      })

      return Object.assign({}, state, { entities, photoIds });

    case RECEIVE_PHOTO:
      entities[action.photo.id] = action.photo
      photoIds.unshift(action.photo.id)

      return Object.assign({}, state, {
              entities,
              photoIds,
              currentPhoto: action.photo.id
            });

    case REMOVE_PHOTO:
      delete entities[action.photo.id]
      const idx = photoIds.indexOf(action.photo.id)
      const currentPhoto = idx === 0 ? null : state.currentPhoto
      photoIds.splice(idx, 1)

      return Object.assign({}, state, { entities, photoIds, currentPhoto });

    case SELECT_CURRENT_PHOTO:
      return Object.assign({}, state, { currentPhoto: action.id });

    case UPDATE_PAGE:
      return Object.assign({}, state, { page: action.page });

    case REACHED_MAX_PAGE:
      return Object.assign({}, state, { reachedMaxPage: true });

    default:
      return state;
  }
}

export default photoReducer;
