import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
import { GiHamburgerMenu } from 'react-icons/gi';

import SignForm from './SignForm';

import 'swiper/css';
import 'swiper/css/pagination';

const TopComponent = styled.section`
  #title {
    font-family: 'Victorian';
    font-size: 4em;
    position: absolute;
    bottom: 30%;
    left: 30%;
    -ms-transform: rotate(-8deg); /* IE 9 */
    -webkit-transform: rotate(-8deg); /* Chrome, Safari, Opera */
    transform: rotate(-8deg);
  }
  img {
    width: 100%;
    height: 100vh;
  }
  /* swiper style */
  .swiper .swiper-pagination {
    position: absolute;
    bottom: 20%;
  }
  .swiper .swiper-pagination-bullet {
    background-color: #fff;
    margin: 0 20px;
    border-radius: 0;
    width: 2em;
  }
`;

const TopMenu = styled.ul`
  margin: 1em;
  display: flex;
  position: absolute;
  z-index: 2;
  top: 1em;
  left: 0;
  right: 0;

  .reservation {
    flex: 1;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
  .logo {
    flex: 2;
    display: flex;
    justify-content: center;
    font-size: 3em;
  }
  .hamburger {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

const ModalBg = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const images = [image1, image2, image3, image4];

// swiper option
const swiperOptions = {
  modules: [Pagination, Navigation, A11y, Autoplay],
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: true,
  pagination: {
    clickable: true,
  },
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
};

// modal 제어 변수
export const MODAL_SIGNIN = 'signin';
export const MODAL_SIGNUP = 'signup';

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(MODAL_SIGNIN);

  // 모달 open
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setCurrent(MODAL_SIGNIN);
  };

  return (
    <TopComponent>
      <nav>
        <TopMenu>
          <li className="reservation" onClick={toggleModal}>
            <span>RESERVATION</span>
          </li>
          <li className="logo">
            <span>BUTTER</span>
          </li>
          <li className="hamburger">
            <GiHamburgerMenu />
          </li>
        </TopMenu>
      </nav>

      <Swiper {...swiperOptions}>
        {images.map((item, index) => {
          return (
            <SwiperSlide key={item}>
              <img src={item} alt={`${item}-${index}`} />
              {index === 0 && <p id="title">For The high-end</p>}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modal */}
      {isOpen && (
        <ModalBg>
          <SignForm current={current} setCurrent={setCurrent} toggleModal={toggleModal} />
        </ModalBg>
      )}
    </TopComponent>
  );
};

export default Top;
