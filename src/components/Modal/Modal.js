import React from 'react';
import ModalComponent from 'react-modal'; 

ModalComponent.setAppElement('#root'); 

export const Modal = ({ isOpen, onRequestClose, style, contentLabel, largeImageURL, tags }) => (
    <ModalComponent
    className="Overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel={contentLabel}
    >
      <img className='Modal' src={largeImageURL} alt={tags} width="850" />
    </ModalComponent>
);