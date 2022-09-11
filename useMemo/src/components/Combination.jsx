import { useMemo } from "react";
// useMemo will help with performance here by just calling "arrangments" function
// only when "countBooks" change, and not whenever "shelfName" prop changes too.
const Combinations = ({ countBooks, shelfName }) => {
    console.log("Combinations component is re-rendered");
    // This factorial function won´t be rendered anymore if the number of books doesn't change
    let arrangements = useMemo(() => {
      console.log("Total number of ways being calculated");
      let arrs = 1;
      for (let i = 2; i <= countBooks; i++) {
        arrs *= i;
      }
      return arrs;
    }, [countBooks]);

    return `The total number of ways you can arrange the books on the shelf ${shelfName} is : ${arrangements}`;
};

export default Combinations;