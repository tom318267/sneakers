import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = () => {
  const images = [
    {
      original: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
    {
      original: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
    {
      original: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
    {
      original: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
  ];
  return (
    <div className="ProductGallery">
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
        showThumbnails
      />
    </div>
  );
};

export default ProductGallery;
