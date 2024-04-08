// import { Component } from "react";

// export default function Func() {
//   let apple = "사과";

//   const inEng = () => {
//     // .state 요소를 찾아 해당 요소의 content를 apple로 바꾸기
//     const content = document.querySelector(".state");
//     content.innerText = "apple";
//     apple = "apple";

//     console.log(apple);
//   };
//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 vanilla JS로 작성</div>
//       <button onClick={() => inEng()}>영어로 바꾸기</button>
//       <div className="state">{apple}</div>
//     </>
//   );
// }

// ----------------------------------------------------------

// useState 사용
// import { useState } from "react";

// export default function FuncState() {
// const [state 변수명, state를 변경시키는 setter 함수 = userState(state의 초기값)]
// useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로

//   const [apple, setApple] = useState("사과");
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h2>함수형 </h2>
//       <div>이 컴포넌트는 useState</div>
//       <button onClick={() => setApple("apple")}>영어로 변경</button>
//       <div>{apple}</div>
//       <hr />
//       <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
//       <div>{number}</div>

//       <button onClick={() => setNumber((prevNum) => prevNum + 1)}> + 1 </button>
//     </>
//   );
// }

//-------------------------------------------
// 버튼 클릭 시 apple -> 사과 -> apple -> 사과

// import { useState } from "react";

// export default function FuncState() {
//   const [showEnglish, setShowEnglish] = useState(true);

//   return (
//     <div>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>useState 사용해 버튼 클릭 시 사과➡️apple➡️사과➡️apple</div>
//       <button
//         onClick={() => {
//           setShowEnglish(!showEnglish);
//         }}
//       >
//         {showEnglish ? "한글" : "영어"} 로 변경
//       </button>
//       <div>{showEnglish ? "apple" : "사과"}</div>
//     </div>
//   );
// }

export default function FuncState() {}
