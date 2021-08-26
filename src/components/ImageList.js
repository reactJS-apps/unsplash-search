import React from 'react';

const ImageList = ({ images }) => {
  const photos = images.map(({ urls, id, alt_description }) => {
    return <img src={urls.regular} key={id} alt={alt_description} />;
  });
  return <div>{photos}</div>;
};

export default ImageList;
