/* The re-rendering of this component can affect performance, as it will repeat expensive calculations.
It uses the mathematical concept of factorials to calculate the number of arrangements. For example, 
if the number of books is 4, it returns 4*3*2*1=24. Even if the number of books is slightly more,
for example, even if it is 10 books, the calculations can get expensive. */

import React from "react";

// With React memo we can memorize "Combinations" component to avoid rendering this component each time
// the state of another sibbling component like "Shelf" is changed in the parent component "App".
// So now "Combinations" will just be rendered again only if its inner state changes.
const Combinations = React.memo(function ({ countBooks }) {
    // Check how many times this component is rendered
    console.log("Combinations component is re-rendered");

    let arrangements = 1;
    for (let i = 2; i <= countBooks; i++) {
      arrangements *= i;
    }
    return ` The total number of ways you can arrange the books is : ${arrangements}`;
})
export default Combinations;