// font awesome을 활용해서 아이콘 넣기!

import "@fortawesome/fontawesome-free/js/all.js";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCat,
  faCloud,
  faHippo,
  faPaw,
  faUmbrella,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

function Sort2() {
  const [isToggled, setIsToggled] = useState(false);
  // 처음에는 메뉴가 안보이는 상태로 시작하니까, useState()에 false로 넣어준다

  return (
    <MenuList id="gnb" isToggled={isToggled}>
      {/* (버튼 클릭) > ul메뉴가 나옴 */}
      {/* blind로 텍스트도 꼭 넣어주자(reset 설정이 있어야 blind 적용이 돼서 사라질것) */}
      <button
        onClick={() => {
          setIsToggled(!isToggled); // !~ : 부정연산자. 반대값을 출력함.
        }}
      >
        <FontAwesomeIcon icon={isToggled ? faXmark : faBars} />
        <span className="blind">전체메뉴 보기</span>
      </button>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          Mac
        </li>
        <li>
          <FontAwesomeIcon icon={faCloud} />
          iPad
        </li>
        <li>
          <FontAwesomeIcon icon={faCat} />
          iPhone
        </li>
        <li>
          <FontAwesomeIcon icon={faPaw} />
          Watch
        </li>
        <li>
          <FontAwesomeIcon icon={faHippo} />
          Music
        </li>
        <li>
          <FontAwesomeIcon icon={faUmbrella} />
          고객지원
        </li>
      </ul>
    </MenuList>
  );
}

const MenuList = styled.div`
  ul {
    display: ${(props) => (props.isToggled ? "block" : "none")};
    max-width: 200px;
    padding: 20px;
    border-radius: 4px;
    background-color: skyblue;
    border: 1px solid gray;
    list-style: none;
  }
`;

export default Sort2;
