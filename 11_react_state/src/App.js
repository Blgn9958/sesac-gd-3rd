import Func from "./components/FuncState";
import Prac1 from "./components/Prac1";
import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Func />
      <Prac1 />

      {show && <modal msg="확인하시겠습니까?" setShow={setShow} />}

      {show && (
        <modal msg="확인하시겠습니까?" isInput={true} setShow={setShow} />
      )}

      {show && (
        <modal msg="확인하시겠습니까22?" isCancelBtn={true} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
