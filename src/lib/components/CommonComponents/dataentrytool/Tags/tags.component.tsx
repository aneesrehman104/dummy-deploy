import React from "react";

export const Tag: React.FC<{ name: string; type: "acquirer" | "target" }> = ({ name, type }) => {
  return (
    <div className={`flex justify-center items-center rounded-lg py-3 w-24 px-4 ease-in duration-200 cursor-pointer ${type === "acquirer" ? "bg-green-200 hover:bg-green-300" : "bg-red-200 hover:bg-red-300"}`}>
      { name }
    </div>
  );
};
