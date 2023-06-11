import { useContext, useState } from "react";
import lock from "../assets/buy-again.png"
import { myContext } from "../context";
function Orderitem(props) {
    const {order,setorder,addeditems,setaddeditems} = useContext(myContext)
    const [ToggleOrder,setToggleOrder] = useState(true)
    const BuyAgain=(Id)=>{
        let newFiltered = order.filter(item => item.id === Id)
        let newaddedItem = [...addeditems,...newFiltered]
        setaddeditems(newaddedItem)
        console.log(order)
        setToggleOrder(false)
    }
    setTimeout(() => {
        setToggleOrder(true)
    }, 4000);
    return (
        <div id="order-item" className="flex gap-4 sm:h-[13em] md:h-[13em] lg:h-[10em] flex-col md:flex md:flex-row md:flex sm:justify-around md:gap-[3em]">
            <div className="flex gap-4 sm:absolute sm:left-12">
                <img src={props.image} className="w-16 sm:relative sm:left-12 md:relative md:left-0 sm:mr-16 md:mr-4 h-16" alt="" />
            <div className="flex flex-col">
                <p className="font-bold">{props.name}</p>
                <p>arriving on: june 21</p>
                <p>Quantity: {props.quantity}</p>
                <button onClick={()=>BuyAgain(props.id)} className="order-btn sm:mt-16 lg:mt-2">
                    <img src={lock} className="mr-4 w-7" alt="" />
                    Buy it again
                </button>
                <p className={ToggleOrder ? "hidden" : "text-green-700 font-bold pb-5 pt-2"}>successfully added!</p>
            </div>
        </div>
            <div className="">
                <button className="w-36 sm:mt-10 relative left-[5.2em] sm:relative sm:left-[12.5em] lg:relative lg:left-[20em] md:w-[202px]" id="track-btn">Track package</button>
            </div>
        </div>
      );
}

export default Orderitem;