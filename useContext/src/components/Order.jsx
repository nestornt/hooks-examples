import { useContext } from "react";
import shopContext from "../ShopContext";

const Order = () => {
  const {isTheShopOpen, orderMessage } = useContext(shopContext);
  const orderFood = () => {
      alert(orderMessage);
  };
  return (
    <>
      { isTheShopOpen === "Open" && <button onClick={ orderFood }> Order </button> }
    </>
  );
};
export default Order;