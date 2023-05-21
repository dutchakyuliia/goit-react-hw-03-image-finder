import React, { Component } from 'react';
import './Modal.css';
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
          <img src={this.props.largeImageUrl} alt="image" />
        </div>
      </div>
    );
  }
}
