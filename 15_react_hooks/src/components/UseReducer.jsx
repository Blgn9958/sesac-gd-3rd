import { useState, useReducer } from "react";

const reducer = (prevState, action) => {
  console.log("dipatch 호출 시 reducer 동작함");
  console.log(prevState, action);

  // reducer 함수 내부에는 조건문을 많이 사용함
  // swtich나 if else 등등
  // 복잡한 state를  관리한다는 것은 state가 한 가지만 있는 것이 아니고
  // 업데이트 로직이 한 가지 있다는 것이 아니기 때문
  switch (action.type) {
    case "deposit":
      return Number(prevState) + Number(action.payload);
    case "widthdraw":
      return Number(prevState) - Number(action.payload);
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스패치] = useReducer(리듀서, 스테이트의 초기값);
  const [money, dispatch] = useReducer(reducer, 0);
  // reducer는 따로 만들어줘야 함
  // 잔고 (money state)를 수정하고 싶은 경우 리듀서가 디스패치를 불러줌

  return (
    <>
      {" "}
      <h2>useReducer 사용</h2>
      <div>잔고 {money}원</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "widthdrawAll", payload: null });
          alert("당신은 거지가 되고싶습니다까?");
          setNumber(0);
        }}
      >
        전액 출금
      </button>
    </>
  );
}
