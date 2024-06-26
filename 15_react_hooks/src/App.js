import UseMemo from "./components/UseMemo";
import UseCallback1 from "./components/UseCallBack1";
import UseCallback2 from "./components/UseCallBack2";
import UseReducer from "./components/UseReducer";
import CustomHook from "./components/Customhook";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <UseCallback1 />
      <UseCallback2 />
      <UseReducer />
      <CustomHook />
    </div>
  );
}

export default App;
