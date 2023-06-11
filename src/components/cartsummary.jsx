import { useContext, useState } from "react";
import { myContext } from "../context";
function Cartsummary() {
    const {addeditems,setaddeditems,order,setorder,total,setotal} = useContext(myContext)
    const sum = addeditems.reduce((accumulator,currentValue)=>{
        return accumulator += Number(currentValue.priceCents/100)
    },0)
    const quantityy = addeditems.reduce((accumulator,currentValue)=>{
        return accumulator += Number(currentValue.quantity)
    },0)
    const sumQuantity = sum * quantityy/addeditems.length
    const shipping = sumQuantity * 0.49
    const tax = sumQuantity*0.1
    const Total = sumQuantity + tax + shipping
    const [paypalToggle,setpaypalToggle] = useState(false)
    const HandleOrder=()=>{
        let TotalArray = addeditems.map((item)=>{
            return {...item,total: Total}
        })
        setorder(TotalArray)
        setotal(Total)
        if(addeditems.length === 0){
            alert("Sorry! your cart is empty")
        }
        else{
            alert("success! Go to your Order section to view the orders")
        }
        setaddeditems([])
    }
    return (
        <div id="summary" className="flex flex-col w-[20em] sm:p-1 sm:w-[27em] h-[26.5em] ">
                <div className="w-[25em] flex flex-col gap-5 pl-10 pt-5">
                    <p className="font-bold text-xl">Order Summary</p>
                    <div className="flex gap-16  sm:gap-[10em] md:gap-[10em] lg:gap-[10em]">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <p>Items({addeditems.length}):</p>
                                <p>Shipping & handling:</p>
                            </div>
                            <div className="flex flex-col">
                                <p>Total before tax:</p>
                                <p>Estimated tax(10%):</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="font-bold flex flex-col">
                                <p>${isNaN(sumQuantity.toFixed(2)) ? "0.00" : sumQuantity.toFixed(2)}</p>
                                <p>${isNaN(shipping.toFixed(2)) ? "0.00" : shipping.toFixed(2)}</p>
                            </div>
                            <div className="font-bold flex flex-col">
                                <p>${isNaN(sumQuantity.toFixed(2)) ? "0.00" : sumQuantity.toFixed(2)}</p>
                                <p>${isNaN(tax.toFixed(2)) ? "0.00" : tax.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <li className="text-slate-300 sm:pl-4 pt-2 list-none" >....................................................................................................................................</li>
                <div className="flex gap-24 sm:gap-[11.5em] pl-10">
                    <div className="flex flex-col gap-3">
                        <p id="order-p" className="font-bold text-xl">Order total:</p>
                        <div className="flex gap-5 text-lg">
                            <p>use PayPal</p>
                            <input onClick={()=>setpaypalToggle(!paypalToggle)} checked={paypalToggle} className="w-5" type="checkbox" />
                        </div>
                        
                    </div>
                    <div className="">
                        <p className="font-bold">${isNaN(Total.toFixed(2)) ? "0.00" : Total.toFixed(2)}</p>
                    </div>
                </div>
                <div className={paypalToggle ? "flex" : "hidden"}>
                    <a href="https://www.paypal.com/us/signin"><button className="w-[15em] rounded-md h-10 sm:ml-[3.2em] mb-4 sm:w-[20em] mt-2 ml-10 text-white bg-black">Paypal</button></a>
                </div>
                <button onClick={HandleOrder} id="btn-order" className="w-[15em] sm:w-[20em]">Place Your Order</button>
            </div>
      );
}

export default Cartsummary;