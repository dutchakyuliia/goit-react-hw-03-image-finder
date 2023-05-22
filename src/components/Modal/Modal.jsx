import React, { Component } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
export class Modal extends Component {

  componentDidMount() {
   document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }
  
  onKeyPressed(e) {
    if (e.keyCode === 27) {
      this.props.setIsOpen(false);
    }
  }

  
  render() {
    return (
      <div
        className={'overlay' + (!this.props.isOpen ? ' hidden' : '')}
        onClick={ () =>{this.props.setIsOpen(false)}}
        onKeyDown={this.onKeyPressed}
        tabIndex={0}
      >
        <div className="modal">
          <img src={this.props.largeImageUrl} alt="gallery" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  largeImageUrl: PropTypes.string.isRequired
};