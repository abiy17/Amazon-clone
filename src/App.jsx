import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AmazonNavHome from './components/AmazonNavHome'
import AmazonHomePage from './pages/AmazonHomePage'
import product from "./product.js"
import { myContext } from './context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AmazonCart from './pages/AmazonCart'
import Order from './pages/Order'
function App() {
  const [products,setproducts] = useState(product)
  const [addeditems,setaddeditems] = useState([])
  const [selectedValue,setselectedvalue] = useState(1)
  const [itemsQuantity,setitemsQuantity] = useState([])
  const [searchValue,setsearchValue] = useState("")
  const [order,setorder] = useState([])
  const [total,setotal] = useState()
  return (
    <>
    <myContext.Provider value={{products,total,setotal,setproducts,addeditems,order,setorder,setaddeditems,selectedValue,setselectedvalue,searchValue,setsearchValue}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AmazonHomePage />}/>
            <Route path='/cart' element={<AmazonCart />}/>
            <Route path='/order' element={<Order />}/>
          </Routes>
        </BrowserRouter>
    </myContext.Provider>
    </>
  )
}

export default App
