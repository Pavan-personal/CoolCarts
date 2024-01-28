import "./App.css";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import UserParams from "./components/UserParams";
import Home from "./components/Home";
import Cart from "./components/Cart";
import cartIcon from "./assets/cartIcon.jpg";
import logo from "./assets/logo.png";
import styles from "./styles/myStyles.module.css";
import { useSelector } from "react-redux";
import DetailedItem from "./components/DetailedItem";
import { useDispatch } from "react-redux";
import { changeCategory } from "./redux/slices/FilterSlice";
import { useState } from "react";

function App() {

  const status = useSelector((state)=>state.amount)
  const category = useSelector((state)=>state.filter)
  const [clicked,setCLicked] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <nav className="select-none flex p-4 min-h-[12vh] justify-around gap-20 sm:justify-around items-center">
        <NavLink to="/" className="flex items-center justify-center p-1 gap-3">
          <img className="h-14 sm:h-16 -rotate-12" src={logo} />
          <div className="font-[800] text-[1.7rem] sm:text-3xl italic scale-[1.02] text-gray-500">
            <span className={`${styles.dpsr} text-slate-600`}>CoolCarts</span>
          </div>
        </NavLink>
        {/* <NavLink to='' onClick={
          ()=>{
            setCLicked(!clicked)
         }
        }>
        <i className={`sm:hidden fa fa-bars p-3 duration-[0.5s] rounded-full text-white scale-[1.3] ${clicked ? 'bg-black rotate-180' : 'bg-blue-400'}`}></i>
        </NavLink> */}
        <div className="flex font-semibold gap-5 items-center justify-center text-xl">
          <select name='category' value={category} onChange={ e => dispatch(changeCategory(e.target.value)) } className=" hidden sm:flex text-sm translate-y-[0.15rem] scale-90 p-1 border-2 border-black bg-gray-100 rounded-md">
            <option value="All categories" className="text-sm p-4">All Categories</option>
            <option value="men's clothing" className="text-sm p-4">Mens clothing</option>
            <option value="women's clothing" className="text-sm p-4">Womens clothing</option>
            <option value="electronics" className="text-sm p-4">Electronics</option>
            <option value="jewelery" className="text-sm p-4">Jewelery</option>
          </select>
          <NavLink onClick={() => dispatch(changeCategory('All categories'))} to="/"> <i className="fa fa-home text-3xl sm:text-4xl text-gray-600"></i> </NavLink>
          <NavLink to="/cart" className='relative'>
            <img className="h-8 sm:h-8" src={cartIcon} />
            {
              status>0? <i className="fa fa-bell absolute -top-1 -right-3 animate-pulse text-red-500"></i> : ''
            }
          </NavLink>
        </div>
      </nav>
      <hr className="w-[90vw] h-[1.2px] bg-slate-400 rounded-full mx-auto"/>
      <div className="h-fit min-h-[88vh] py-10 flex items-center justify-center select-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<DetailedItem />} />
          <Route path="/:stuff" element={<UserParams />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
