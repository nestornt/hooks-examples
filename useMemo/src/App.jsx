// Check the concept of memorization in React before looking at the usage of useMemo.
// useMemo memorizes the return statement of a function.
import { useMemo, useState } from 'react'
import { Fruits } from './components/Fruits'
import Search from './components/Search'
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

  const handleShelfChange = (e) => {
    setShelfName(e.target.value);
  };
  const handleBookCountChange = (e) => {
    setBookCount(e.target.value);
  };

  return (
    <div>
      <div>
        <p style={paragraphStyle}>First example of a useful situation for the useMemo hook</p>
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
          {bookCount > 0 && <Combinations countBooks={bookCount} shelfName={shelfName} />}
        </label>
      </div>
      <p style={paragraphStyle}>Second example of a useful situation for the useMemo hook</p>

      <div style={fruitsStyle}>
        <Fruits/>
        <Search/>
      </div>
    </div>
  );
}

export default App
