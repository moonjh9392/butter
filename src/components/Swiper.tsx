import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
const Swiper = () => {
  const images = [image1, image2, image3, image4];
  return (
    <>
      {images.map((item) => {
        return <SwiperItem key={item}>{item}</SwiperItem>;
      })}
    </>
  );
};

export default Swiper;

const SwiperItem = styled.div`
  width: 100vw;
`;
