import React from "react";

export const Title: React.FC<{ title: string; className?: string}> = ({ title, className }) => {
  return <div className={"text-2xl py-2 font-bold "}>{title}</div>;
};
