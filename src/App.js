import { useState, useEffect } from "react";

function ExampleChild() {
  useEffect(() => {
    console.log("Subscribing...");
    //cleanup function
    return () => {
      console.log('Unsubscribing...');
    }
  }, []);

  return <h2>I am the exaple child</h2>;
}

function App() {
  const [color, setColor] = useState("red");
  const [msg, setMsg] = useState("Initial Message");

  useEffect(() => {
    console.log(msg);
  }, [msg]);

  useEffect(() => {
    console.log("mount");
  }, []);

  function changeColor() {
    //setColor('blue');
    color === "red" ? setColor("blue") : setColor("red");
  }

  function changeMsg() {
    setMsg("Super Secret Message");
  }

  return (
    <div>
      <h1 style={{ background: color }}>React Hooks Demo</h1>
      <h1>{msg}</h1>
      <button onClick={changeColor}>Click Me</button>
      <button onClick={changeMsg}>Click Me</button>
      {msg === 'Initial Message' && <ExampleChild />}
    </div>
  );
}

export default App;
