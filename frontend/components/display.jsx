import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPhotos } from '../actions/photo_actions';
import { scaleImg } from '../util/photo_util';
import { getCurrentPhoto } from '../reducers/selectors';
import GradientModal from './gradient_modal';



class Display extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gradientModalActive: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.disableModal = this.disableModal.bind(this)
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.page)
  }

  handleClick() {
    console.log(this.state)

    this.setState({
      gradientModalActive: !this.state.gradientModalActive
    })
  }

  disableModal() {
    console.log("disableModal")

    this.setState({
      gradientModalActive: false
    })
  }

  render() {
    if (!this.props.photos[this.props.currentPhoto]
      || this.props.isLoading ) {

      return (
        <div className="loading" >
          <h1>Loading...</h1>
        </div>
      )

    } else {
      const photo = this.props.photos[this.props.currentPhoto]
      const src = photo.image_url;
      const { width, height } = scaleImg(280, photo)

      const imgStyle = {
        width,
        height,
      }

      const gradientStyle = {
        width,
        height,
        background: photo.gradient,
      }

      return (
        <div className="display-container">
          <img className="current-img" src={ src } style={imgStyle} />
          <div
            id="gradient-box"
            style={gradientStyle}
            onClick={ this.handleClick }/>

          {
            this.state.gradientModalActive
            && <GradientModal
                  gradientStyle={ photo.gradient }
                  disableModal={ this.disableModal }/>
          }
        </div>
      )
    }
  }
};

Display.propTypes = {
  photos: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  currentPhoto: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
}


const mapStateToProps = state => {
  return {
    photos: state.photos.entities,
    page: state.photos.page,
    currentPhoto: getCurrentPhoto(state),
    isLoading: state.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: page => dispatch(fetchPhotos(page)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
