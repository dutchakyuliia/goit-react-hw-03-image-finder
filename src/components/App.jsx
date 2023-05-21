import React, { Component } from 'react';
import {Searchbar} from './Searchbar';
import { ImageGallery } from './ImageGallery';


export class App extends Component {
  state = {
    searchImages: '',
  };
  handleSearch = searchImages => {
    this.setState({ searchImages });
  };
  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch}></Searchbar>
        <ImageGallery searchImages={this.state.searchImages}></ImageGallery>
      
      </div>
    );
  }
}
