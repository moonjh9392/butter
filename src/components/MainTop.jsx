import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
import { GiHamburgerMenu } from 'react-icons/gi';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import 'swiper/css';
import 'swiper/css/pagination';

const TopComponent = styled.section`
  .topMenu {
    padding: 2em 0.7em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
  }
  #title {
    font-family: 'Victorian';
    font-size: 4em;
    position: absolute;
    bottom: 30%;
    left: 25%;
    -ms-transform: rotate(-8deg); /* IE 9 */
    -webkit-transform: rotate(-8deg); /* Chrome, Safari, Opera */
    transform: rotate(-8deg);
  }

  /* swiper style */
  .swiper .swiper-pagination {
    position: absolute;
    bottom: 300px;
  }
  .swiper .swiper-pagination-bullet {
    background-color: #fff;
    margin: 0 20px;
    border-radius: 0;
    width: 2em;
  }
`;

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 999;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const images = [image1, image2, image3, image4];

  const handleSignInOpen = () => {
    console.log('setSignInOpen');
    setSignInOpen(true);
  };

  const handleSignUpOpen = () => {
    console.log('setSignUpOpen');
    setSignUpOpen(true);
  };

  const handleSignInClose = () => {
    console.log('setSignInOpen');
    setSignInOpen(false);
  };

  const handleSignUpClose = () => {
    console.log('setSignUpOpen');
    setSignUpOpen(false);
  };
  return (
    <TopComponent>
      <nav>
        <ul className="topMenu">
          <li onClick={handleSignInOpen}>RESERVATION</li>
          <li>BUTTER</li>
          <li>
            <GiHamburgerMenu />
          </li>
        </ul>
      </nav>

      <Swiper
        modules={[Pagination, Navigation, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={item}>
              <img src={item} alt={`${item}-${index}`} />
              {index === 0 && <p id="title">For The high-end</p>}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {signInOpen && (
        <ModalBg>
          <SignInForm SignUpOpen={handleSignUpOpen} SignInClose={handleSignInClose} />
        </ModalBg>
      )}
      {signUpOpen && (
        <ModalBg>
          <SignUpForm SignInOpen={handleSignInOpen} SignUpClose={handleSignUpClose} />
        </ModalBg>
      )}
    </TopComponent>
  );
};

export default Top;
