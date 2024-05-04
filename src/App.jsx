import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return <>{count}</>;
}

export default App;
