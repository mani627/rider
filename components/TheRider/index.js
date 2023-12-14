import React, { useEffect, useState } from 'react';
// import One1 from './One.png';
// import One2 from './Two.png';
const ImageSwitcher = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const totalImages = 3; // Change this to the total number of images
    const currentImage = Math.floor(scrollProgress * totalImages) + 1;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* <img
        src={`${One.src}${currentImage}.png`}  // Adjust the image path and naming convention
        alt={`Image ${currentImage}`}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          transition: 'opacity 0.5s ease-in-out',
          opacity: 1 - scrollProgress,  // Fade out as scrolling progresses
        }}
      /> */}
    </div>
  );
};

export default ImageSwitcher;