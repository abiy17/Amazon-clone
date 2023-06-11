import { useContext } from "react";
import amazon from "../assets/W-amazon.svg"
import locked from "../assets/locked.svg"
import Orderitem from "../components/OrderItem";
import { myContext } from "../context";
import { useNavigate } from "react-router-dom";
function Order() {
    const {order,setorder,total,setotal} = useContext(myContext)
    const Navigate = useNavigate()
    return (
        <div className="order">
            <div className="flex justify-evenly sm:flex h-16 items-center sm:gap-40">
                <img className="w-[6em]" src={amazon} alt="" />
                <li className="text-lg font-bold sm:text-xl md:text-2xl list-none flex">My Orders</li>
                <img className="w-9" src={locked} alt="" />
        </div>
            <div className="mt-[3em] w-2/3 sm:w-5/6 md:w-4/5 lg:w-3/4 flex flex-col gap-10 m-auto min-h-screen ">
                <p className="text-2xl font-bold">your Orders</p>
                {order.length === 0 ? 
                <div>
                    <p className="font-bold">No Orders yet!</p>
                    <button onClick={()=>Navigate(-1)} id="order-btn" className="w-[10em] mt-4 h-[2.5em] bg-yellow-300 text-black rounded-xl text-xl">Order someThing</button>
                </div> : <>
                    <div id="orderItems-Nav" className="h-[8em] sm:h-[7em] sm:flex sm:flex-row sm:gap-[9em] md:flex-row md:gap-[5em] lg:flex-row h-[5em] md:justify-around">
                    <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-5 sm:relative sm:left-12  md:gap-10">
                        <div className="flex sm:flex gap-3 sm:flex-col">
                            <p>Order Placed:</p>
                            <p>June 9</p>
                        </div>
                        <div id="text" className="flex w-[100px] gap-3 sm:w-[60px] sm:flex sm:flex-col">
                            <p>Total:</p>
                            <p className="text">${total}</p>
                        </div>
                        
                    </div>
                    <div className="mt-3 sm:mt-0 gap-3 flex sm:flex sm:flex-col">
                        <p>order Id:</p>
                        <p className=" sm:w-[10em]">S{Math.random()}q34</p>
                    </div>
                </div>
                <div className="">
                    {order.map((item)=>{
                        return <Orderitem
                        key={item.id} 
                        {...item}
                        />
                    })}
                </div>
                </>}
            </div>
            
        </div>
      );
}

export default Order;