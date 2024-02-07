import { useState } from "react";

//   ----------------------vanila JS 구문----------------------
//   let name = "겨울";

//   const chnageName = () => {
//     // 삼항연산자
//     // 조건 ? 참일때 : 거짓일때
//     // 조건-> 일치연산자(===) 사용해서 적어준다
//     name = name === "겨울" ? "가을" : "겨울";
//     console.log(name);

//     // h1태그에 .innerText 이용해서 name값 출력
//     // w3 - .innertext - syntax에서 해당되는 명령어 찾아서 가져오기 (여기서는 set할거니까 Set the text content of an element or node을 가져온다)
//     // element.innerText = text
//     document.querySelector("h1").innerText = "이름 바꾸기";
//   };
//   ----------------------------------------------------------
//
//
//   ----------------------react 구문----------------------
//   useState: 상태값을 저장할 수 있는 변수를 생성하는 함수
//   const [상태이름, 상태변경함수] = useState(상태의 초기값)   // 구문이기 때문에 그대로 외우기!

const State = () => {


const [name, setName] = useState('겨울')
    // 상태변경함수 이름을 정할때는, 보통 set을 붙여준다(set이 변경한다는 뜻이니까)
    // 겨울부터 시작할거니까 useState()에 '겨울' 입력
    const changeName = () => {
        // setName(상태변경함수) 입력
        // 상태변경함수(상태값)
        // 상태값을 변경하면 컴포넌트가 다시 렌더링된다.
        setName(name === '겨울' ? '가을' : '겨울')
    } 



  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>이름 바꾸기</button>
      {/* 클릭했을 때(onclick) changeName 이라는 함수 실행 */}
    </div>
  );
};
export default State;
