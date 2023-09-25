import React, { useState } from 'react';
import styled from 'styled-components';
import image5 from '../assets/image5.svg';

const BottomComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .activeMenu {
    display: flex;
    justify-content: space-around;
    padding: 2em 1em;
    color: rgb(111, 115, 124);
    li:hover {
      color: white;
      text-decoration: underline;
    }
  }
  .active {
    color: white;
    text-decoration: underline;
  }
  .desc {
    z-index: 1;
  }

  img {
    position: absolute;
    top: 7em;
    right: 3em;
  }
`;
const Bottom = () => {
  const [active, setActive] = useState('');

  const menuItems = ['High-end Car', 'MAINENANCE', 'TUNNING CAR', 'BODY PAINT'];

  //메인 페이지 하단 메뉴들 Active 펑션
  const changeActive = (item) => {
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
      <div className="desc">
        <p>HIGH-END CAR</p>
        <p>STROE</p>
        <p>하이엔드 직수입, 구매부터 튜닝까지</p>
        <p>고객의 요구에 맞춘 최상의 서비스를 제공합니다.</p>
      </div>
      <div className="desc">VIEW MORE</div>
      <img src={image5} alt={'image5'} />
    </BottomComponent>
  );
};

export default Bottom;
