import { useContext } from "react";
import Cartitem from "./Cartitem";
import { myContext } from "../context";
import { useNavigate } from "react-router-dom";
import Cartsummary from "./cartsummary";
function Cartitems() {
    const {addeditems} = useContext(myContext)
    const Navigate = useNavigate()
    return (
        <div className="m-auto flex flex-col gap-12 relative top-24">
            <p className="font-bold ml-24 text-2xl lg:relative lg:left-16 relative sm:left-32">Review your order</p>
            <div className="w-1/3 flex ml-8 sm:ml-14 flex-col-reverse sm:flex  lg:flex-row lg:gap-12">
                <div className="">
                    {addeditems.length === 0 ? <div className="h-[10em] sm:ml-14 md:ml-[7em] md:mt-[2em] lg:ml-[4em] lg:mt-0 md:mr-[5em] lg:mr-[20em] text-center text-2xl text-2xl">
                    <p className="mb-3 w-[8.7em]">Your Cart is empty.</p>
                    <button onClick={()=>Navigate(-1)} className="w-[8em] h-[2.5em] bg-yellow-300 text-black rounded-xl">View Products</button>
                    </div> : addeditems.map((item)=>{
                    return <Cartitem
                                key={item.id}
                                {...item}
                            />
                    })}
                </div>
                <div className=" md:ml-[10em] lg:ml-[0em]">
                    <Cartsummary />
                </div>
            </div>
        </div>
      );
}

export default Cartitems;