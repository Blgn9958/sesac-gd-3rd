import { useState } from "react";

export default function Prac3() {
  const [display, setDisplay] = useState(true);

  if (user === "student" && user === "child") {
    console.log("aa");
  }
  return (
    <>
      <button onClick={() => setDisplay(!display)}>
        {display ? "사라져라" : "보여라"}
      </button>
      {display && <h2>안녕하세요!</h2>}
    </>
  );
}
