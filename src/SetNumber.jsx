import { useState } from "react"

const SetNumber = () => {
    // 상태를 변경하고 싶다면? useState 구문을 사용

    const [number, setNumber] = useState(0)
    // 컴포넌트일때만 대문자시작(파스칼케이스). 함수는 카멜케이스

    // function increase() {
    //     setNumber(number + 1)
    // }

    // function decrease() {
    //     setNumber(number - 1)
    // }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => {setNumber(number + 1)}}>+</button>
            <button onClick={() => {setNumber(number - 1)}}>+</button>
            {/* <button onClick={increase}>+</button> */}
            {/* <button onClick={decrease}>-</button> */}
        </div>
    )
}

export default SetNumber