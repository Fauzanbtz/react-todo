import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    task: "",
    priority: "",
    description: "",
    category: "",
    date: "",
    when: "",
  });
  const valuesave = JSON.parse(localStorage.getItem("myData"));
  const item = valuesave.find((todo) => todo.id === parseInt(id));

  useEffect(() => {
    setValue(item);
  }, []);

  const handleUpdate = (item) => {
    item.preventDefault();
    const saveData = valuesave.map((todo) => {
      if (todo.id === parseInt(id)) {
        return {
          ...todo,
          task: value.task,
          priority: value.priority,
          description: value.description,
          category: value.category,
          date: value.date,
          when: value.when,
        };
      }
      return todo;
    });
    localStorage.setItem("myData", JSON.stringify(saveData));

    navigate("/");
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
            <form className="space-y-4" onClick={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="task" className="mb-1">
                    Task:
                  </label>
                  <input
                    id="task"
                    value={value.task}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        task: e.target.value,
                      }))
                    }
                    className="border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="Task name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="priority" className="mb-1">
                    Priority:
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={value.priority}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
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
                  <label htmlFor="description" className="mb-1">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={value.description}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="border border-gray-300 p-2 rounded h-24"
                    placeholder="A short description of the task - can be omitted"></textarea>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="category" className="mb-1">
                    Category:
                  </label>
                  <input
                    id="category"
                    name="category"
                    value={value.category}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="e.g. household, school, work"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="date" className="mb-1">
                    Date:
                  </label>
                  <input
                    id="date"
                    name="date"
                    value={value.date}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    className="border border-gray-300 p-2 rounded"
                    type="date"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="when" className="mb-1">
                    Time:
                  </label>
                  <input
                    id="when"
                    name="when"
                    value={value.when}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        when: e.target.value,
                      }))
                    }
                    className="border border-gray-300 p-2 rounded"
                    type="time"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <Link to={"/"}>
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded">
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-500 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
