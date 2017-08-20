import React from 'react';
import ThumbsFeed from './thumbs_feed';

const PhotoSelector = (props) => {

  const handleChange = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("photo[image]", file)

    props.addPhoto(formData);
  }

  return (
    <div className="photo-selector-container" >
      <div className="add-photo-button">
        <input
          type="file"
          onChange={ handleChange }
          />
        <p>A</p>
        <p>D</p>
        <p>D</p>
        <br />
        <p>P</p>
        <p>H</p>
        <p>O</p>
        <p>T</p>
        <p>O</p>
      </div>

      <ThumbsFeed
        photos={ props.photos }
        photoIds={ props.photoIds }
        page={ props.page }
        reachedMaxPage={ props.reachedMaxPage }
        deletePhoto={ props.deletePhoto }
        updatePage={ props.updatePage }
        selectCurrentPhoto={ props.selectCurrentPhoto }/>
    </div>
  )
}

export default PhotoSelector;
