// import FuncProps from "./components/FuncProps";
import ClassProps from "./components/ClassProps";
import "./components/App.css";
import FoodProps from "./components/FoodProps";
import 

function App() {
  // const sayHi = () => {
  //   alert("sayhi");
  // };
  return (
    <div className="App">
      {/* <FuncProps weather="sunny" feeling="happy" />

      <FuncProps feeling={true} />
      <FuncProps feeling="exiting" date={240402} /> */}
      {/* children */}
      {/* <FuncProps>{sayHi}</FuncProps> */}
      <ClassProps drink="americano" payment="card" price={4000} />
      <ClassProps drink="아인슈페너" payment="현금" />
      <ClassProps drink={15900} payment="현금" />
      <ClassProps drink="레몬에이드" />
      <br /> <br />
      <FoodProps />
    </div>
  );
}

export default App;
