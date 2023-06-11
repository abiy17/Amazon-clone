import { useContext, useEffect, useState } from "react";
import { myContext } from "../context";
function Cartitem(props) {
    const {addeditems,setaddeditems,selectedValue,setselectedvalue,HandleSubmit} = useContext(myContext)
    const [itemValue,setitemValue] = useState(props.selectedValue)
    const [Toggle,setToggle] = useState(false)
    const [input,setinput] = useState("")
    const HandleDelete=(tasktoDelete)=>{
        let newArray = addeditems.filter(item=>item.id !== tasktoDelete)
        setaddeditems(newArray)
    }
    const HandleUpdate=(ItemToUpdate)=>{
            let filterUpdate = addeditems.filter(item => item.id === ItemToUpdate)
            console.log(filterUpdate)
            filterUpdate[0].quantity = itemValue
            let updatedArray = [...addeditems,filterUpdate[0]]
            let newremoved = updatedArray.pop()
            setaddeditems(updatedArray)
            setToggle(!Toggle)
        
    }
    return (
        <form onSubmit={HandleSubmit} action="submit">
        <div id="cart-item" className="w-[20em] pl-1 pt-12 sm:p-[30px] mt-12 mb-[3em] flex flex-col h-[33em] sm:ml-10 sm:w-[30em] sm:h-[35em] sm:mt-12  sm:flex sm:flex-col gap-12 md:flex-row md:w-[38em] lg:w-[45em] md:h-[17em] md:gap-12">
            <div className="">
                <p className="mb-4 font-bold text-green-700 text-xl ml-3">Delivery date: {input}</p>
                <div className=" flex sm:gap-4">
                    <img className="w-24 h-[5em]" src={props.image} alt="" />
                
                <div className="">
                    <p className="font-bold w-[15em]">{props.name}</p>
                    <p className="font-bold text-red-600">${props.priceCents/100}</p>
                    <div className="flex gap-3">
                        <div className="flex gap-5">
                            <p>Quantity: {props.quantity}</p>
                            <select required onChange={(e)=>{setitemValue(e.target.value)}}  className={Toggle ? "flex bg-slate-100 rounded-md" : "hidden"}>
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <p className="cursor-pointer text-blue-500" onClick={()=>HandleUpdate(props.id)}>Update</p>
                        <p onClick={()=>HandleDelete(props.id)} className="cursor-pointer text-blue-500">Delete</p>
                    </div>
                </div>
            
                
            </div>
            </div>
            <div className="mt-12 pl-10 sm:mt-0 sm:relative sm:left-5 sm:flex sm:flex-col sm:gap-3 md:flex md:flex-col md:gap-2">
                    <p className="font-bold">Choose a delivery option</p>
                    <div className="flex gap-4">
                        <input  onChange={(e)=>{setinput(e.target.value)}} type="radio" name="order" value="Tuesday, June 13" id="" />
                        <div className="flex flex-col">
                            <p className="text-green-800 font-bold">Tuesday, June 13</p>
                            <p className="text-slate-600">Free Shipping</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <input onChange={(e)=>{setinput(e.target.value)}} type="radio" name="order" value="Wednesday, June 7" id="" />
                        <div className="flex flex-col">
                            <p className="text-green-800 font-bold">Wednesday, June 7</p>
                            <p className="text-slate-600">$4.99 - Shipping</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <input onChange={(e)=>{setinput(e.target.value)}} type="radio" name="order" value="Monday, June 5" id="" />
                        <div className="flex flex-col">
                            <p className="text-green-800 font-bold">Monday, June 5</p>
                            <p className="text-slate-600">$9.99 - Shipping</p>
                        </div>
                    </div>
            </div>
            
        </div>
        </form>
     );
}

export default Cartitem;