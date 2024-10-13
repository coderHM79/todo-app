// import { useState } from "react";
import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import TodoContainer from "./Components/TodoContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <TodoContainer />
    </>
  );
}

export default App;
