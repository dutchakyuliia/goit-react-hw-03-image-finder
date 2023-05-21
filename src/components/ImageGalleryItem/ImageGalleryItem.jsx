import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item" onClick={() => { this.props.setIsOpen(true); this.props.changeLargeImageUrl(this.props.image.largeImageURL)}   } >
  <img className="gallery-img" src={this.props.image.webformatURL} alt="image"/>
</li>
    );
  }
}