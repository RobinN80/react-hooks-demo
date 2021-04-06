import {useState} from 'react';

function App() {

const [color, setColor] = useState('red');
const [msg, setMsg] = useState('');

function handleClick() {
  //setColor('blue');
  color === 'red' ? setColor('blue') : setColor('red');
  setMsg('Super Secret Message');
}

  return (
    <div>
      <h1 style = {{background: color}}>
        React Hooks Demo
      </h1>
      <h1>{msg}</h1>
      <button onClick = {handleClick}>Click Me</button>
    </div>
  );
}

export default App;
