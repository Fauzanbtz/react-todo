import React from "react";
import Table from "../component/table/tableComplete";
import Button from "../component/button/button";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" justify-center rounded-xl bg-gradient-to-b from-[#b7c1fb] to-[rgba(2,132,199,0.5)]">
        <h1 className="text-center text-white text-5xl font-bold">
          React To-Do List
        </h1>
        <Link to={"/"} className="flex justify-center">
          <Button>back</Button>
        </Link>
        <Table />
      </div>
    </div>
  );
};

export default Complete;
