import { useCallback, useEffect, useState } from "react";

export default function UseCallback1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number state : ${number}`);
  };

  const func2 = useCallback(() => {
    console.log(`number state : ${number}`);
  }, [number]);

  useEffect(() => {
    console.log(`func1 함수 변경!!`);
  }, [func1]);

  return (
    <>
      <h2>UseCallback1 사용</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button onClick={func1}>func 실행</button>
      <button onClick={func2}>func2 실행</button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </>
  );
}

// const fetchData = useCallback(() => {
//   fetch(`~~~~${postId}`).then((response) => response.json());
// }, [postId]);

// useEffect(() => {
//   fetchData().then((data) => SetData(data));
// }, [fetchData]);
