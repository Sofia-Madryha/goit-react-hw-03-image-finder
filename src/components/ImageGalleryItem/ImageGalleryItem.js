export const ImageGalleryItem = ({ image }) => {
  return <img src={image.webformatURL} alt={image.id}></img>;
};
