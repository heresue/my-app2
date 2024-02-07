// 이벤트 종류 찾기
// https://ko.legacy.reactjs.org/docs/events.html#supported-events

const Event = () => {
  const handleClick = (event) => {
    console.log("버튼이 클릭되었습니다.");
    alert("버튼 클릭!");
    console.log(event); // 이벤트 객체
    console.log(event.target); // 이벤트가 발생한 DOM 요소
    console.log(event.type); // 이벤트 타입
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'yellowgreen'
  }

  const handleChange = (event) => {
    document.querySelector(".text-value").innerText = event.target.value
    // = 의 의미: event.target.value를 innerText에 적용해라 (같다 X)
  }


   
  return (
    <>
    <h1>이벤트</h1>
      <h2>클릭</h2>
      <button onClick={handleClick}>버튼</button>
      {/* 함수에 ()가 없는것은 함수를 호출하는게 아니라 함수를 '등록'하는 것 
        onClick={handleClick()} 이렇게 ()를 넣어주면 함수를 '호출'하기 때문에
        버튼을 누르지 않아도 바로 alert창이 뜬다.*/}

      <h2>마우스 오버</h2>
      <div onMouseOver={handleMouseOver}>마우스 오버 시 배경색 변함</div>

      <h2>입력</h2>
      <input onChange={handleChange} type="text" placeholder="플레이스 홀더"/>
      {/* placeholder: input박스 가이드
      value: 앞에 입력한 값을 두번 입력할 필요없도록 값을 넣어줌 */}
      <div className="text-value"></div>
    </>
  );
};

export default Event;
