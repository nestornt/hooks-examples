import React, { useState } from 'react'
import Avatar from './components/Avatar/Avatar'
import Tooltip from './components/Tooltip/Tooltip'

function State() {

  const [counter, setCounter] = useState(0);
  const [letters, setLetters] = useState({});
  const [numbers, setNumbers] = useState([]);
  let count = 0;
  const AVATAR_A = 'https://gravatar.com/avatar/8002e5fc25342ff6ed7ab71528e14e0d?s=200&d=robohash&r=x';
  const AVATAR_B = 'https://gravatar.com/avatar/dcc0bbb78babe157439c036004bb2369?s=200&d=robohash&r=x';
  const TooltipBox = <div>Account</div>;

  // Wrong way to update state. It won´t update outside of its scope
  const incrementVar = () => {
    count = count + 1;
  }
  // Correct way to update state. useState will trigger a dom update everytime setCounter is called
  const incrementState = () => {
    if (counter >= 9) showLettersObject();
    setCounter(counter + 1);
  }
  const decrementState = () => {
    counter <= 0 && showNumbersArray();
    setCounter(counter - 1);
  }

  // Wrong way to update the state of an object
  const displayLetters = () => {
    v.abc = 3;
    setLetters(v);
  }
  // Correct way to update the state of an object
  const showLettersObject = () => {
    setLetters(
      {
        ...letters, 
        a: 'a',
        b: 'b', 
        c: 'c', 
        d: 'd'
      } 
    );
  }
  // Another correct way to update the state of an array
  const showNumbersArray = () => {
    const arr = [1,2,3,4,5,6];
    setNumbers([arr]);
  }

  // Child component to render props sent by a parent
  const Title = ({ incrementState }) => {
    return <button onClick={incrementState}>+</button>
  }

  return (
    <div className="App">
      <h1>Wrong way to set a counter {count}</h1>
      <button onClick={incrementVar}>+</button>
      <h1>The correct way to set a counter {counter}</h1>
      <button onClick={decrementState}>-</button>
      <Title incrementState={incrementState} />

      <br/>
      <h1>Display a list of object elements if the state counter reaches 10</h1>
      <p>This section iterates over an object combining "Object.keys" with "Array.map"</p>
      {Object.keys(letters).map((element, key) => {
        return (
          <div key={key}>
            <li>{element}</li>
          </div>
        )
      })}

      <br/>
      <h1>Display an array if the state counter reaches -1</h1>
      <p>This section iterates over an array using "Array.map"</p>
      {numbers.map((e,i) => {
        return (
          <div key={i}>
            <p>{e}</p>
          </div>
        )
      })}

      <br/>
      <h2>Call Avatar component to show an avatar picture or the user's name if the picture is not valid</h2>
      <Avatar src={AVATAR_A} username="Example user" />

      <br/>
      <h2>Call Avatar component with a tooltip</h2>
      <Tooltip tooltip={TooltipBox}>
        <Avatar src={AVATAR_B} username="Example user"/>
      </Tooltip>
    </div>
  )
}

export default State