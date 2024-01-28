import React, { useEffect, useState } from "react";
import data from "../data";
import Spinner from "./Spinner";
import Item from "./Item";
import { NavLink } from "react-router-dom";
import { setProduct } from "../redux/slices/ProductSlice";
import { useDispatch,useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true)
      const result = data()               
      useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
          result.length ===0? '' : setLoading(false)
        }, 1200);
      },[result])
      return loading ? (
        <Spinner />
        ) : (
          <div className="mx-auto flex flex-col justify-center items-center sm:w-fit sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 sm:gap-x-6 md:gap-x-3 gap-y-6 p-8">
      {result.map((prod) => {
        return (
          <NavLink id={prod.id}
          to="/product"
          onClick={() => {
            dispatch(setProduct(prod))
          }}
          property={prod}
          >
            <Item id={prod.id} info={prod} />
          </NavLink>
        );
      })}
    </div>
  );
}

export default Home;
