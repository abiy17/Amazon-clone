import amazone from "../assets/amazon.png"
import search from "../assets/search.svg"
import cart from "../assets/cart-icon.png"
import bar from "../assets/hamburger-menu.png"
import amazoneMobile from "../assets/amazon-mobile-logo-white.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { myContext } from "../context"
function AmazonNavHome() {
    const [toogle,setoggle] = useState(true)
    const{addeditems,searchValue,setsearchValue} = useContext(myContext)
    
    return ( 
        <div id="amazon-nav" className="absolute top-0 w-full h-16 justify-evenly text-white flex flex-row gap-0">
            <div className="">
            <img className="hidden sm:flex h-14 pt-3 md:w-28 md:pt-4 md:relative md:left-0" src={amazone}/>
            <img src={amazoneMobile} alt="" className="relative top-3 h-12 left-0 sm:hidden"/>
            </div>
            <div className="flex">
                <input id="search" onChange={(e)=>{setsearchValue(e.target.value)}} className="relative top-[.9em] text-black md:min-w-[20em] md:max-w-[34em] lg:min-w-[35em] lg:max-w-[49em] xl:min-w-[50em] h-10" type="text"placeholder="Search"/>
                <button onClick={()=>HandleSearch} id="search-btn" className="h-10 relative top-[0.9em] w-12 pl-1">
                    <img className="w-10" src={search}/>
                </button>
            </div>
            <img onClick={()=>{setoggle(!toogle)}} src={bar} className="h-5 relative top-5  md:hidden" alt="" />
            <div className={toogle ? "hidden  md:flex md:gap-5 md:pt-2" : "flex flex-col z-50  pt-2 h-34 pb-7 w-full absolute left-0 bg-black top-16 text-center md:flex md:gap-5 md:pt-2"}>
                <Link to="order"><li id="Nav-li" className="m-auto font-bold pb-12 md:flex-col md:gap-0 md:w-[4.3em] h-[3em] tracking-tighter list-none text-md"><p className="font-bold">Returns & Orders</p></li></Link>
                <Link to="cart">
                    <div id="cart-div" className={toogle ? "flex flex-row gap-1" : "m-auto mt-12"}>
                    <span id="span" className=" sm:relative sm:left-10 sm:font-bold">{addeditems.length}</span>
                    <img className="hidden md:flex md:w-14 md:h-10" src={cart} alt="" />
                    <span className="relative  md:font-bold md:pt-5 sm:relative sm:top-0">Cart</span>
                </div>
                </Link>
            </div>
        </div>
     );
}

export default AmazonNavHome;