import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ items }) => {
  return (
    <ul className="ImageGallery ">
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem image={item} />
        </li>
      ))}
    </ul>
  );
};
