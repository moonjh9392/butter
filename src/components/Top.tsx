import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';

const Top = () => {
  const images = [image1, image2, image3, image4];
  return (
    <TopComponent>
      <nav>
        <ul className="topMenu">
          <li>RESERVATION</li>
          <li>BUTTER</li>
          <li>333</li>
        </ul>
      </nav>
      <div>
        {images.map((item, index) => {
          return <img src={item} alt={'img' + index} />;
        })}
      </div>
      <p id="title">For The high-end</p>
      <div className="swiper_btn"> 1,2,3,4</div>
    </TopComponent>
  );
};

export default Top;

const TopComponent = styled.section`
  .topMenu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2em 1em;
    position: absolute;
    top: 0em;
    left: 0em;
    overflow-x: hidden;
  }
  #title {
    top: 15em;
    left: 17em;
    position: absolute;
  }

  .swiper_btn {
  }
`;
