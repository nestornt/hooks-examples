// useCallback hook is just useful to use to improve performance if a function call is causing
// unnecessary renders, so we will need to memorize it to keep the same instance of it during renders.
// In this example "handleClick" fn is sent to "Combinations" component, causing that issue if we
// don´t use useCallback hook.
import { useCallback, useState } from 'react'
import Combinations from './components/Combination';
import Shelf from './components/Shelf';

const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "75%",
  fontSize: 20
};
const fruitsStyle = {
  marginTop: "20px",
  float: "left",
  fontSize: 18
};
const paragraphStyle = {
  marginTop: "20px",
  float: "left",
  fontSize: 26,
  fontWeight: "bold",
  width: "100%",
}

function App() {

  const [bookCount, setBookCount] = useState("");
  const [shelfName, setShelfName] = useState("");
  const [shelfSpace, setShelfSpace] = useState("");

  const handleShelfChange = (e) => {
    setShelfName(e.target.value);
  };
  const handleBookCountChange = (e) => {
    setBookCount(e.target.value);
  };
  // We wrap up handleClick with useCallback hook to memorize this function, so we prevent
  // <Combinations/> component to get rendered every time, since handleClick function now
  // will be always the same instance, so it won´t trigger <Combinations/> unnecesary
  // renders, because now the function isn´t changing at every render.
  const handleClick = useCallback((theSpace) => {
    setShelfSpace(theSpace);
  }, []);

  return (
    <>
      <div>
        <p style={paragraphStyle}>useCallback example</p>
        <input
          placeholder="Shelf name"
          style={fieldStyle}
          value={shelfName}
          onChange={handleShelfChange}
        />
        <label style={fieldStyle}>
          <Shelf shelfName={shelfName} />
        </label>
        <input
          placeholder="How many books?"
          style={fieldStyle}
          value={bookCount}
          onChange={handleBookCountChange}
        />
        <label style={fieldStyle}>
          {bookCount > 0 && <Combinations countBooks={bookCount} checkSpace={handleClick} />}
          {shelfSpace && (
            <p style={fieldStyle}>The space at shelf is - {shelfSpace}</p>
          )}
        </label>
      </div>
    </>
  );
}

export default App
