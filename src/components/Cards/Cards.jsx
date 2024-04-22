import React from "react";

export const Cards = ({ date, img, description }) =>{
  return (
    <>
     <div className="flex">
        <div className="w-1/3 m-2">
            <img className="h-34 "  src={ img } alt="" />
        </div>
        <div className="flex flex-col w-2/3 items-start justify-center ">
            <h2 className="font-semibold text items-start">{ date }</h2>
            <p className="text-justify">{ description }</p>
            <hr className="w-80 "/>
        </div>
     </div>
    </>
  ) 
}