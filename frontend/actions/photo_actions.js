import axios from 'axios';
import { togglePhotoSelector } from './photo_selector_actions';
import { updateLodaingStatus } from './loading_actions';

export const ADD_PHOTO = 'ADD_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const SELECT_CURRENT_PHOTO = 'SELECT_CURRENT_PHOTO';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const REACHED_MAX_PAGE = 'REACHED_MAX_PAGE';


export const fetchPhotos = (page) => {
  return (dispatch) => {
    axios.get(`/api/photos?page=${page}`)
      .then( (res) => {
        if (res.data.length === 0) {
          dispatch(reachedMaxPage());
        } else {
          dispatch(recievePhotos(res.data));
        }
      })
  }
};

export const addPhoto = (formData) => {
  return (dispatch) => {
    dispatch(updateLodaingStatus());

    axios.post('/api/photos', formData)
      .then( res => dispatch(recievePhoto(res.data)))
      .then( () => dispatch(updateLodaingStatus()))
  }
};

export const deletePhoto = (id) => {
  return (dispatch) => {
    axios.delete(`/api/photos/${id}`)
      .then( res => dispatch(removePhoto(res.data)))
  }
}

export const updatePage = (page) => {
  return (dispatch) => {
    dispatch(changePage(page))
    dispatch(fetchPhotos(page))
  }
}

export const selectCurrentPhoto = (id) => {
  return {
    type: SELECT_CURRENT_PHOTO,
    id
  }
}

const recievePhotos = (photos) => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
};

const recievePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo
  }
};

const removePhoto = (photo) => {
  return {
    type: REMOVE_PHOTO,
    photo
  }
}

const changePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  }
}

const reachedMaxPage = () => {
  return {
    type: REACHED_MAX_PAGE
  }
}
