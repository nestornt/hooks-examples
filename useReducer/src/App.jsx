import { useReducer, useRef } from "react";

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

// A good use case of useReducer would be for a component with a lot of state variables, 
// that would result in a lot of code complexity. Now with useReducer hook, we set all 
// state variables in the same object.

const reducer = (state, action) => {
  const { type, payload } = action;
  return { 
    ...state,
    [type]: payload
  };
};

function App() {
  const addressRef = useRef();
  // Set the state variables
  const initialState = {
    fieldState: "",
    fieldCity: "",
    fieldAddress: ""
  };
  // Calling "dispatch" to set new state values will result in a "reducer" function call
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fieldState, fieldCity, fieldAddress } = state;

  console.log(state);

  const fillAddress = () => {
    dispatch({
      type: "fieldAddress",
      payload: `${fieldCity},${fieldState}`
    });
    addressRef.current.focus();
  };

  return (
      <div style={{ width: "100%" }}>
        <input
          placeholder="State"
          autoFocus
          value={fieldState}
          style={fieldStyle}
          onChange={ e =>
            dispatch({ type: "fieldState", payload: e.target.value })
          }
        />
        <input
          placeholder="City"
          value={fieldCity}
          style={fieldStyle}
          onChange={e => 
            dispatch({ type: "fieldCity", payload: e.target.value })
          }
        />
        <button style={buttonStyle} onClick={fillAddress}>
          Fill Address
        </button>
        <textarea
          value={fieldAddress}
          placeholder="Address"
          style={fieldStyle}
          onChange={e => 
            dispatch({ type: "fieldAddress", payload: e.target.value })
          }
          ref={addressRef}
        />
      </div>
    );
}

export default App