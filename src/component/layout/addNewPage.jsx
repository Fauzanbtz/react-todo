import { Link } from "react-router-dom";
import React, { useState } from "react";
import useLocalStorage from "../hooks/toLocalStorage";

const AddNew = () => {
  const [value, setValue] = useState({
    task: "", // Updated to task
    name: "",
    priority: "",
    description: "",
    category: "",
    date: "",
    when: "",
  });
  const [items, setItems] = useLocalStorage("myData", []);

  const handleAdd = (event) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItems = [...items, value];
    setItems(newItems);
    localStorage.setItem("myData", JSON.stringify(newItems));
    setValue({
      task: "", // Updated to task
      name: "",
      priority: "",
      description: "",
      category: "",
      date: "",
      when: "",
    });
    console.log(newItems);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center rounded-xl bg-gradient-to-b from-[#b7c1fb] to-[rgba(2,132,199,0.5)]">
        <h1 className="text-center text-white text-5xl font-bold">
          React To-Do List
        </h1>
        <div className="w-[200vh] flex items-center py-10 justify-center">
          <div className="bg-white p-2 rounded-xl w-4/5">
            <h2 className="text-2xl font-bold mb-4">Add a new to-do:</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="task" className="mb-1">Task:</label>
                  <input
                    id="task"
                    name="task"
                    value={value.task}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="Task name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="priority" className="mb-1">Priority:</label>
                  <select
                    id="priority"
                    name="priority"
                    value={value.priority}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded">
                    <option value="">-</option>
                    <option value="Tidak Penting">Tidak Penting</option>
                    <option value="Cukup Penting">Cukup Penting</option>
                    <option value="Penting">Penting</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="description" className="mb-1">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={value.description}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded h-24"
                    placeholder="A short description of the task - can be omitted"></textarea>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="category" className="mb-1">Category:</label>
                  <input
                    id="category"
                    name="category"
                    value={value.category}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="e.g. household, school, work"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="date" className="mb-1">Date:</label>
                  <input
                    id="date"
                    name="date"
                    value={value.date}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded"
                    type="date"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="when" className="mb-1">Time:</label>
                  <input
                    id="when"
                    name="when"
                    value={value.when}
                    onChange={handleAdd}
                    className="border border-gray-300 p-2 rounded"
                    type="time"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <Link to={"/"}>
                  <button type="button" className="px-4 py-2 border border-gray-300 rounded">Cancel</button>
                </Link>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
