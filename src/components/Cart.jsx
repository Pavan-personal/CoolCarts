import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import empty from "../assets/emptyCart.png";
import { NavLink } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const amount = useSelector((state) => state.amount);

  return (
    <div className="bg-blue-100 w-[90%] sm:w-fit p-4 flex flex-col rounded-xl items-center">
      {
        amount>0?
        <div className="p-4 grid lg:grid-cols-2">
        {cartItems.map((item) => {
          return <CartItem id={item.id} info={item} />
        })}
      </div> : <div className="flex flex-col items-center justify-center">
        <img src={empty} className="h-44 scale-105 rotate-[5deg]" alt="" srcset="" />
        <div className="font-semibold -translate-y-4">Cart is empty!!</div>
        <NavLink to='/' className="bg-fuchsia-600 w-fit p-2 text-white rounded-lg active:scale-95">Return to home</NavLink></div>
      }
      {
        amount>0?
        <div className="p-3 text-2xl font-bold">Total amount: ${amount}</div> : ''
      }
    </div>
  );
}

export default Cart;
