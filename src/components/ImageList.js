import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const photos = images.map((image) => {
    return <ImageCard data={image} key={image.id} />;
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;
