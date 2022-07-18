import { useState, useEffect } from 'react'

function Fetch() {
  const [text, setText] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.agify.io?name=juan")
      .then(res => res.json())
      .then(res => {
        setText(res);
        setLoading(false);
    })
  }, [setText, setLoading]);

  if (loading) return "loading..."
  return (
    <>
      {Object.keys(text).map(e => {
        return (
          <h2>{e}: {text[e]}</h2>
        )
      })}
    </>
  )
}

export default Fetch