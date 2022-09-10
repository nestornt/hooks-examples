import { useState } from "react";
import shopContext from "./ShopContext";
import Menu from "./components/Menu";

const App = () => {
  const [shopOpen, setShopOpen] = useState("Open");
  const [btnText, setBtnText] = useState("Close");

  const openOrCloseShop = () => {
    if (shopOpen === "Open") {
      setShopOpen("Closed");
      setBtnText("Open");
    } else {
      setShopOpen("Open");
      setBtnText("Closed");
    }
  };
  return (
    <shopContext.Provider 
      value = {
        {
          "isTheShopOpen" : shopOpen,
          "orderMessage" : "Food ordered",

        }
      }
    >
      <h1>Food Shop is now {shopOpen}</h1>
      <button onClick={openOrCloseShop}>{btnText}</button>
      <Menu />
    </shopContext.Provider>
  );
};

export default App