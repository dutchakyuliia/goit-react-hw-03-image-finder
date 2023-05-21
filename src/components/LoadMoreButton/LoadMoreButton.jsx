import React, { Component } from 'react';
import "./LoadMoreButton.css"
import PropTypes from 'prop-types';
export class LoadMoreButton extends Component {
    render() {
        return (
        <button className="button-load" onClick={this.props.addNewPage}>Load more</button>
    )
}

}
