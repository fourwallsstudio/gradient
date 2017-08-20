export const getCurrentPhoto = (state) => {
  return state.photos.currentPhoto
    ? state.photos.currentPhoto
    : state.photos.photoIds[0]
}
