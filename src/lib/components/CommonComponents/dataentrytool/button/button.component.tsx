import React from "react";

export const Button: React.FC<{ name: string, className: string }> = ({ name, className }) => {
  return (
    <button className={"bg-gray-50 ease-in duration-200 cursor-pointer flex items-center text-sm justify-center py-1 border outline-none border-gray-700 rounded-[0.2rem] " + className}>
      { name }
    </button>
  );
};
