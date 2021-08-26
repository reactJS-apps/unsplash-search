import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
  const photos = images.map(({ urls, id, alt_description }) => {
    return <img src={urls.regular} key={id} alt={alt_description} />;
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;
