import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class GradientModal extends React.Component {

  componentDidMount() {
    const gradient = document.getElementById('gradient-box')
    const modal = document.getElementById('g-modal-text')
    const copy = document.getElementById('g-modal-copy')

    window.onclick = (event) => {
      if (event.target !== modal
        && event.target !== copy
        && event.target !== gradient) {

        this.props.disableModal()
      }
    }
  }


  componentWillUnmount() {
    window.onclick = null;
  }

  render() {

    return (
      <div
        className="gradient-modal">

        <div id="g-modal-text" >{ this.props.gradientStyle }</div>
        <CopyToClipboard text={ this.props.gradientStyle }>
          <div id="g-modal-copy">copy</div>
        </CopyToClipboard>
      </div>
    )
  }
}

export default GradientModal;
