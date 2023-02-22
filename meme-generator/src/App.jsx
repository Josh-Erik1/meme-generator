import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Image from "./components/Image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[700px] mx-auto">
      <Header />
      <Inputs />
    </div>
  );
}

export default App;
