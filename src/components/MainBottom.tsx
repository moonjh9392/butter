import React, { useState } from 'react';
import styled from 'styled-components';
import image5 from '../assets/images/image5.png';

const BottomComponent = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1em;

  .activeMenu {
    display: flex;
    justify-content: space-around;
    padding: 2em 1em;
    color: rgb(111, 115, 124);
  }
  .active,
  a,
  li:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 8px;
    cursor: pointer;
  }

  .bottom_img {
    width: 50%;
    height: 60%;
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
`;

const Desc = styled.div`
  z-index: 1;
  margin: 2em 4em;

  p {
    padding: 10px 0;
  }
  .eng {
    font-size: 3.5em;
  }
`;

const menuItems: string[] = ['High-end Car', 'MAINENANCE', 'TUNNING CAR', 'BODY PAINT'];

const Bottom = () => {
  const [active, setActive] = useState<string>('');

  //메인 페이지 하단 메뉴들 Active 펑션
  const changeActive = (item: string) => {
    setActive(item);
  };
  return (
    <BottomComponent>
      <nav>
        <ul className="activeMenu">
          {menuItems.map((item) => {
            return (
              <li
                key={item}
                className={active === item ? 'active' : ''} // 활성 항목에 active 클래스 적용
                onClick={() => changeActive(item)} // 메뉴 항목을 클릭할 때 활성 상태 변경
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
      <Desc>
        <p className="eng">HIGH-END CAR</p>
        <p className="eng">STROE</p>
        <p>하이엔드 직수입, 구매부터 튜닝까지</p>
        <p>고객의 요구에 맞춘 최상의 서비스를 제공합니다.</p>
      </Desc>
      <Desc>
        <a href={'https://github.com/moonjh9392/butter'} target="_blank" rel="noopener noreferrer">
          VIEW MORE
        </a>
      </Desc>
      <img className="bottom_img" src={image5} alt={'image5'} />
    </BottomComponent>
  );
};

export default Bottom;
