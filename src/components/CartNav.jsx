import { useContext } from "react";
import amazon from "../assets/W-amazon.svg"
import { myContext } from "../context";
import locked from "../assets/locked.svg"
function CartNav() {
    const {addeditems} = useContext(myContext)
    return (
        <div className="flex justify-evenly sm:flex h-16 items-center sm:gap-40">
            <img className="w-[6em]" src={amazon} alt="" />
            <li className="text-lg sm:text-xl md:text-2xl list-none flex">ChecKout(<p className=" text-blue-800">{addeditems.length} items</p>)</li>
            <img className="w-9" src={locked} alt="" />
        </div>
      );
}

export default CartNav;