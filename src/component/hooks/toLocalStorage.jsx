import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useLocalStorage() {
  const [valueSave, setValuesave] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  const [value, setValue] = useState({
    task: "",
    priority: "",
    description: "",
    category: "",
    date: "",
    when: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setValuesave(JSON.parse(storedData));
    }
  }, []);

  // const [items, setItems] = useLocalStorage("myData", []);
  const handleAdd = (item) => {
    item.preventDefault();
    const id = valueSave.length + 1;
    const addId = { id: id, ...value };
    let addTodos = [...valueSave];
    addTodos.push(addId);
    localStorage.setItem("myData", JSON.stringify(addTodos));
    setValuesave(addTodos);
    setValue({
      task: "",
      priority: "",
      description: "",
      category: "",
      date: "",
      when: "",
    });
    navigate("/");
  };

  //membuat agar todolist terhapus
  const handleDelete = (id) => {
    const newTodos = valueSave.filter((todo) => todo.id !== id);
    const completeTodo = valueSave.find((todo) => todo.id === id);
  
    localStorage.setItem("myData", JSON.stringify(newTodos));
    setValuesave(newTodos);
  
    if (completeTodo) {
      const completedData = localStorage.getItem("completed");
      const completedTodos = completedData ? JSON.parse(completedData) : [];
  
      // Add the completed todo to the list
      completedTodos.push(completeTodo);
  
      // Update "completed" in localStorage
      localStorage.setItem("completed", JSON.stringify(completedTodos));
    }
  };

  //mengupdate data
  const handleUpdate = (id) => {
    const saveData = valueSave.filter((todo) => todo.id !== id);
    localStorage.setItem("myData", JSON.stringify(saveData));

    
  };
  

  return {
    value,
    valueSave,
    handleDelete,
    handleAdd,
    setValuesave,
    setValue,
  };
}

export default useLocalStorage;
