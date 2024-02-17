import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/common/input";

function App() {
  const [count, setCount] = useState("");

  return (
    <>
      <Input
        placeholder="title"
        removeButton
        setValue={setCount}
        value={count}
      />
    </>
  );
}

export default App;
