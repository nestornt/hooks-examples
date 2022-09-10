import { useState, useRef } from "react";

const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  Fantasy: 20
};
const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer"
};

// Just apply useRef hook when it´s necessary to get a dom reference. Otherwise useState is always prefered
// to follow React´s declarative programming style, not interacting with the dom.

function App() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const addressRef = useRef();

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  // We fill the text area the input data. useRef is needed here if we want the text area to get the focus
  const fillAddress = () => {
    setAddress(`${city},${state}`);
    addressRef.current.focus();
  };

  return (
      <div style={{ width: "100%" }}>
        <input
          placeholder="State"
          autoFocus
          value={state}
          style={fieldStyle}
          onChange={(e) => handleInputChange(setState, e)}
        />
        <input
          placeholder="City"
          value={city}
          style={fieldStyle}
          onChange={(e) => handleInputChange(setCity, e)}
        />
        <button style={buttonStyle} onClick={fillAddress}>
          Fill Address
        </button>
        <textarea
          value={address}
          placeholder="Address"
          style={fieldStyle}
          onChange={(e) => handleInputChange(setAddress, e)}
          ref={addressRef}
        />
      </div>
    );
}

export default App
