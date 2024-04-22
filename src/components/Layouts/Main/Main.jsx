import React from "react";

export const Main = ({ children }) => {
    return(
    <div className="max-h bg-gray-600 flex justify-center pr-2 pl-2 pt-12">
        {children}
    </div>
  )
}