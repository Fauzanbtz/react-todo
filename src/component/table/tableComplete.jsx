import React from "react";
import Button from "../button/button";
import { useState, useEffect } from "react";

const TableComplete = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  console.log(completedTasks);

  useEffect(() => {
    const completedData = localStorage.getItem("completed");
    if (completedData) {
      setCompletedTasks(JSON.parse(completedData));
    }
  }, []);

  const handleDelete = (id) => {
    const deleteTask = completedTasks.filter((task) => task.id !== id);
    
    localStorage.setItem("completed", JSON.stringify(deleteTask));
    setCompletedTasks(deleteTask);
  };
  return (
    <div className="flex justify-center bg-[#FFFFFF] m-10 items-start h-96 rounded-xl overflow-scroll">
      <table className="text-center table-auto border-separate border-spacing-x-[10vh]">
        <thead>
          <tr className="h-10">
            <th>Task</th>
            <th>Description</th>
            <th>Category</th>
            <th>When</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map(
            ({ id, task, description, category, when, priority }) => (
              <tr key={id}>
                <td>{task}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{when}</td>
                <td>{priority}</td>
                <td>
                  {" "}
                  <div className="flex justify-center items-center">
                    <Button
                      customStyle="px-5 py-5 m-1 bg-green-500"
                      href=""
                      onClick={() => handleDelete(id)}>
                      <img
                        className="w-5"
                        src="src/assets/icon/bin.png"
                        alt="trash"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComplete;
