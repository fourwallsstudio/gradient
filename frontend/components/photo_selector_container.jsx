import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPhoto, selectCurrentPhoto, deletePhoto, updatePage } from '../actions/photo_actions';
import { togglePhotoSelector } from '../actions/photo_selector_actions';
import ThumbsFeed from './thumbs_feed';
import PhotoSelector from './photo_selector';

class PhotoSelectorContainer extends React.Component {

  handleClick() {
    this.props.togglePhotoSelector();
  }

  render() {
    const active = this.props.photoSelectorActive ? " active" : "";

    return (
      <section>
        <div className={ "photo-select-toggle" + active } onClick={ this.handleClick.bind(this) }>
          <svg width="20" height="20" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <path transform="translate(0 -952.36)" d="m42.191 961.36v33.191h-33.191v15.617h33.191v33.191h15.617v-33.191h33.191v-15.617h-33.191v-33.191zm0 0" />
          </svg>
        </div>

        {
          this.props.photoSelectorActive
          && <PhotoSelector
              photos={ this.props.photos }
              photoIds={ this.props.photoIds }
              page={ this.props.page }
              reachedMaxPage={ this.props.reachedMaxPage }
              addPhoto={ this.props.addPhoto }
              deletePhoto={ this.props.deletePhoto }
              updatePage={ this.props.updatePage }
              selectCurrentPhoto={ this.props.selectCurrentPhoto } />
        }

      </section>
    )
  }
}

PhotoSelectorContainer.PropTypes = {
  photoSelectorActive: PropTypes.bool.isRequired,
  photos: PropTypes.object.isRequired,
  photoIds: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  reachedMaxPage: PropTypes.bool.isRequired,
  togglePhotoSelector: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired,
  selectCurrentPhoto: PropTypes.func.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
}


const mapStateToProps = state => {
  return {
    photoSelectorActive: state.photoSelectorActive,
    photos: state.photos.entities,
    photoIds: state.photos.photoIds,
    page: state.photos.page,
    reachedMaxPage: state.photos.reachedMaxPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglePhotoSelector: () => dispatch(togglePhotoSelector()),
    addPhoto: formData => dispatch(addPhoto(formData)),
    selectCurrentPhoto: id => dispatch(selectCurrentPhoto(id)),
    deletePhoto: id => dispatch(deletePhoto(id)),
    updatePage: page => dispatch(updatePage(page)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSelectorContainer);
