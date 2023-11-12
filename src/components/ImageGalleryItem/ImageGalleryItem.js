import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    if (!this.state.isModalOpen) {
      this.setState({ isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.image;
    return (
      <ul>
        <li className="ImageGalleryItem" key={id}>
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={id}
            loading="lazy"
            onClick={this.openModal}
          />
        </li>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Image Modal"
          largeImageURL={largeImageURL}
        />
      </ul>
    );
  }
}
