import React from "react";
import "../App.css";

function Item(props) {

  return (
    <div className="border-2 w-[22rem] sm:w-64 md:w-52 sm:h-80 md:h-64 lg:w-64 lg:h-[21rem] xl:w-[18rem] xl:h-96 border-zinc-400 flex p-4 py-6 flex-col items-center justify-center cursor-pointer relative gap-7 sm:gap-4 rounded-md hover:shadow-2xl duration-[0.4s] scale-90 sm:scale-[0.95]">
      <img src={props.info.image} className=" h-[18rem] sm:h-28 lg:h-32 xl:h-40" />
      <div className="text-2xl sm:text-xl font-semibold md:text-sm lg:text-lg text-center">{props.info.title.slice(0,40)}</div>
      <div className="font-bold text-3xl sm:text-lg md:text-sm lg:text-xl">${props.info.price}</div>
      {/* <div>{props.info.description.slice(0, 82)}<span className="font-semibold text-blue-500">...</span></div> */}
      <div className="font-semibold absolute top-0 right-0 bg-slate-600 p-7 text-white rounded-bl-full">
        <div className="absolute right-1 top-2">
        {props.info.rating.rate} <i className="fa fa-star-o"></i>
        </div>
      </div>
    </div>
  )
}

export default Item;
