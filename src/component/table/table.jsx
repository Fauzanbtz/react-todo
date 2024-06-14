import React from "react";
import Button from "../button/button";
import useLocalStorage from "../hooks/toLocalStorage";


const Table = () => {
  const { valueSave, value } = useLocalStorage();
  console.log(valueSave);
  console.log(value);
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
          {/* {data.length > 0 ? ( */}
           {valueSave.map(({ id, task, description, category, when, priority }) => (
              <tr>
                {/* <td>{item.task}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.when}</td>
                <td>{item.priority}</td> */}
                <td>{task}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{when}</td>
                <td>{priority}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <Button customStyle="px-5 py-5 m-1 bg-green-500" href="">
                      <img
                        className="w-5"
                        src="src/assets/icon/bin.png"
                        alt="trash"
                      />
                    </Button>
                    <Button customStyle="px-5 py-5 m-1 bg-red-500" href="">
                      <img
                        className="w-5"
                        src="src/assets/icon/edit.png"
                        alt="edit"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          {/* ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
