import { useContext, useState } from "react";
import { myContext } from "../context";
import checkMark from "../assets/checkmark.png"
function Amazonitem(props) {
    const [ToggleCart,setToggleCart] = useState(false)
    const {products,addeditems,setaddeditems,selectedValue,setselectedvalue } = useContext(myContext)
    const HandleClick=(Id,selectedValue)=>{
        let Filtereditems = products.filter(item => item.id === Id)
        Filtereditems[0].quantity = selectedValue
        let Array = [...addeditems,...Filtereditems]
        setaddeditems(Array)
        setToggleCart(true)
    }
    setTimeout(() => {
        setToggleCart(false)
    }, 6000);
    return (
        <div id="items" className="min-h-[30em] relative top-16">
            <div id="products-div" className="">
                <img id="product-image" className="" src={props.image} alt="" />
            </div>
            <div className="m-auto w-[10em]">
            <p className="absolute top-[15em] left-8 ml-12 sm:ml-0 sm:tracking-tight w-[20em]  sm:absolute font-bold sm:w-[12em] flex flex-col">{props.name.slice(0,40)+"..."}</p>
            <div className="absolute top-[17.5em] pt-2">
                <div className="flex gap-3">
                    <img className="w-28" src={props.rating.images} alt="" />
                    <p className="text-blue-700">{props.rating.count}</p>
                </div>
                <p className="font-bold">${props.priceCents/100}</p>
            </div>
            <p></p>
            <div className="">
                <select onChange={(e)=>{setselectedvalue(e.target.value)}} className="absolute top-[21.8em] bg-slate-100 rounded-md">
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
        </div>
        <div className={ToggleCart ? "absolute top-[23.5em]  flex gap-2 items-center pt-2" : "absolute top-[23.5em]  flex gap-2 items-center pt-2 hidden"}>
            <img className="w-5 h-5" src={checkMark} alt="" />
            <p>Added to Cart!</p>
        </div>
            <div className="">
                <button id="add-btn" onClick={()=>HandleClick(props.id,selectedValue)} className="">Add to cart</button>
            </div>
        </div>
      );
}

export default Amazonitem;