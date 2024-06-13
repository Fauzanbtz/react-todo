import React from "react";
import ButtonGroup from "../button/buttonGroup";
import Table from "../table/table";

const FirstLayer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" justify-center rounded-xl bg-gradient-to-b from-[#b7c1fb] to-[rgba(2,132,199,0.5)]">
        <h1 className="text-center text-white text-5xl font-bold">
          React To-Do List
        </h1>
        <ButtonGroup />
        <Table/>
      </div>
    </div>
  );
};

export default FirstLayer;
