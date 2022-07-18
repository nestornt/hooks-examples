/*****  useEffect Examples *****/
// The useEffect hook is normally used for any side effect – whether that is to read from
// an external object or write to an external object.
import { useState, useEffect } from 'react'

function Effect() {
  const [text, setText] = useState('a')
  const onChange = e => { 
    setText(e.target.value) 
  }

  return (
    <>
      <p>
        Parent: <input value={text} onChange={onChange} />
      </p>
      <p>
        Title: <Title text={text} />
      </p>
    </>
  )
}

const Title = ({ text }) => {
  const [count, setCount] = useState(0)
  const [counter, setCounter ] = useState(0)
  
  // In this way useEffect will be called only when the component is mounted
  useEffect(() => {
    console.log("ComponentDidMount")
  }, [])

  // In this way useEffect will be called each time "text" is updated
  useEffect(() => {
    setCount(0)
  },[text])

  // In this way useEffect will be called each time "text" or "count" are changed
  // If an effect callback uses a variable, that variable needs to be in the deps array.
  useEffect(() => {
    alert( text + count)
  }, [count, text])

  // In this way we would run into an infinite loop, since the useEffect would detect
  // that the var "count" in the deps array is changing everytime. The if statement will solve it
  useEffect(() => {
    if (counter >= 1) return
    setCounter(counter+1)
    console.log('counter: ', counter)
  }, [counter])

  const onClick = () => {
    setCount(count + 1)
  }

  console.log('count', count)

  return (
    <button onClick={onClick}>
      {text}: {count}
    </button>
  )
}

export default Effect