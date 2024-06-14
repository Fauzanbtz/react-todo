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

  return {
    value,
    valueSave,
    handleAdd,
    setValuesave,
    setValue,
  };
}

export default useLocalStorage;
