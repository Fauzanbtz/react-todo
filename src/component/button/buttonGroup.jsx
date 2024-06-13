import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const ButtonGroup = () => {
  return (
    <div className="flex justify-center">
      <Link to="/form">
        <Button>Add a new to-do</Button>
      </Link>
      <Button>All</Button>
      <Button>To-do</Button>
      <Button>Completed</Button>
    </div>
  );
};

export default ButtonGroup;
