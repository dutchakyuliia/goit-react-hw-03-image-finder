import React, { Component } from 'react';
import { getImages } from 'components/services/getImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import './ImageGallery.css';
import { Loader } from 'components/Loader';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { Modal } from 'components/Modal';
export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    isOpen: false,
    largeImageUrl: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImages !== this.props.searchImages) {
      this.setState({ isLoading: true });
      getImages(this.props.searchImages)
        .then(responce => responce.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
  
    }
  
  }

  setIsOpen = newIsOpen => {
    this.setState({ isOpen: newIsOpen });
  };

  changeLargeImageUrl = largeImageUrl => {
    this.setState({ largeImageUrl: largeImageUrl });
  };

  render() {
    const { images, isLoading, isOpen } = this.state;
    return (
      <>
        {isLoading && <Loader></Loader>}
        <Modal
          largeImageUrl={this.state.largeImageUrl}
          setIsOpen={this.setIsOpen}
          isOpen={this.state.isOpen}
        ></Modal>
        <ul className="gallery">
          {images?.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              setIsOpen={this.setIsOpen}
              changeLargeImageUrl={this.changeLargeImageUrl}
            ></ImageGalleryItem>
          ))}
        </ul>
        {images && <LoadMoreButton />}
      </>
    );
  }
}
