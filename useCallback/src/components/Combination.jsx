import React from "react";
import useFactorial from "../../../hooks/useFactorial";
// This component will get rendered every time we change "shelfName" from the parent, even 
// if that prop isn't used here, along with the props passed in this component no being changed,
// and using React.memo at the same time.

// This is because in JavaScript, a function object will be different in every render, 
// even if the functions are exactly the same (checkSpace prop in this case)
const Combinations = React.memo(function ({ countBooks, checkSpace }) {
    console.log("Combinations component is re-rendered");

    let space = "";
    switch (countBooks) {
      case 1 - 5: space = "Free Space available"; break;
      case 5 - 10: space = "Perfect"; break;
      case 10 - 15: space = "Need extra storage"; break;
      default: space = "Not Sufficient";
    }

    let arrangements = useFactorial(countBooks);

    return (
      <>
        <p>The total number of ways you can arrange the books is : {arrangements}</p>
        <button onClick={() => checkSpace(space)}>Check Space</button>
      </>
    )
});

export default Combinations;