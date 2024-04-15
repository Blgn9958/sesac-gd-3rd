import { useState } from "react";

export default function FuncEvent() {
  const [msg, setMsg] = useState("힘내세요!");
  const [menu, setMenu] = useState("");

  const msgToEng = () => {
    setMsg("fighting!");
  };

  const msgToKor = () => {
    setMsg("힘내세요!");
  };

  const alertMsg = (msg) => {
    alert(msg);
  };

  const handleEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      alert(`점심 매뉴는 ${menu}로 결정!`);
    }
  };

  return (
    <>
      <h2>함수형 컴포넌트 event handling</h2>
      <div>{msg}</div>
      <button onClick={msgToEng}>fighting!</button>
      <button onClick={msgToKor}>힘내세요!</button>
      <br />

      <button onClick={() => alertMsg("오늘은 금요일이다")}>
        message alert장에 뜨우기2
      </button>

      {/* 방법 2 */}
      {/* bind 메서드 */}
      <button onClick={() => alertMsg(null, " 끝까지 불태워 봅시다아아")}>
        message alert장에 뜨우기2
      </button>

      <br />

      {/* input 태그에서 변경 사항 발생 시 해당 input의 value를 콘솔에 출력 */}

      <input
        type="text"
        value={menu}
        placeholder="오늘 점심 뭐"
        onChange={(e) => {
          console.log(e);
          console.log(e.target.value);
          setMenu(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
    </>
  );
}
