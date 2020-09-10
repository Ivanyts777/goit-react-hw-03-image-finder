import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ images, toggleModal, parseLargeImage }) => {
  return (
    <>
      {images.map((image) => (
        <li
          className="ImageGalleryItem"
          key={image.id}
          onClick={() => parseLargeImage(image.largeImageURL)}
        >
          <img
            className="ImageGalleryItem-image"
            onClick={toggleModal}
            src={image.webformatURL}
            alt={image.tags}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  parseLargeImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
