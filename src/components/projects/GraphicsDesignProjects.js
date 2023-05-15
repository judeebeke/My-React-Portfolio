import React, { useState, useCallback } from "react";
import ImageViewer from 'react-simple-image-viewer';
import {RxCaretRight, RxCaretLeft} from "react-icons/rx";

import { graphicsProjectImage } from "./../localstore/LocalData";

const GraphicsDesignProjects = () => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplayspeed: 2000,
  //     arrows: false,
  //     fade: false,
  //     cssEase: 'linear',
  // }

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {graphicsProjectImage.map((img, index) => {
          return (
            <figure key={index}>
              <img
                src={img}
                className="w-64 h-9/12 lg:w-80"
                alt="My Graphics Projects"
                onClick={() => openImageViewer(index)}
              />
            </figure>
          );
        })}

        {isViewerOpen && (
        <ImageViewer
          src={ graphicsProjectImage }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          leftArrowComponent={<RxCaretLeft />}
          rightArrowComponent={<RxCaretRight />}
        />
      )}
      </div>
    </section>
  );
};

export default GraphicsDesignProjects;
