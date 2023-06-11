import { useContext } from "react";
import { myContext } from "../context";
import AmazonNavHome from "../components/AmazonNavHome";
import CartNav from "../components/CartNav";
import Cartitems from "../components/cartitems";

function AmazonCart() {
  const {addeditems} = useContext(myContext)
    return (
        <div id="cart-page" className="cart">
            <CartNav />
            <Cartitems />
        </div>
      );
}

export default AmazonCart;