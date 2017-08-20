import React from 'react';

const ThumbsFeed = (props) => {

  const handleSelect = (id) => {
    props.selectCurrentPhoto(id)
  }

  const handleDelete = (id) => {
    props.deletePhoto(id)
  }

  const handleNextPage = () => {
    props.updatePage(props.page + 1)
  }

  const thumbs = props.photoIds.map( id => (
    <li key={ id }>
      <div className="thumb-delete" onClick={ handleDelete.bind(null, id) }>
        <svg width="10" height="10" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(0 -952.36)" d="m42.191 961.36v33.191h-33.191v15.617h33.191v33.191h15.617v-33.191h33.191v-15.617h-33.191v-33.191zm0 0" />
        </svg>
      </div>
      <img src={ props.photos[id].thumb } onClick={ handleSelect.bind(null, id) } />
    </li>
  ));

  return (
    <ul className="thums-feed-container" >

      { thumbs }

      <div
        className="load-more-button"
        onClick={ handleNextPage }>

        {
          props.reachedMaxPage &&
          <div>
            <p>N</p>
            <p>O</p>
          </div>
        }

        <div>
          <p>M</p>
          <p>O</p>
          <p>R</p>
          <p>E</p>
        </div>
      </div>
    </ul>
  )
}

export default ThumbsFeed;
