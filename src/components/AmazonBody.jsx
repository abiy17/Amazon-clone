import { useContext } from "react";
import { myContext } from "../context";
import Amazonitem from "./AmazonItem";

function AmazonBody() {
    const {products,searchValue,setsearchValue} = useContext(myContext)
    return (
        <div className="flex flex-col mt:mt-12 sm:mt-0 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-6">
            {products.filter((item)=>{
                return searchValue === "" ? item : item.name.toLowerCase().includes(searchValue.toLowerCase())
            }).map((item)=>{
                return <Amazonitem 
                    key={item.id}
                    {...item}
                />
            })}
        </div>
      );
}

export default AmazonBody;