import { useState, useEffect } from "react";

function useLocalStorage() {
  const [valueSave, setValuesave] = useState([]);

  const [value, setValue] = useState({
    task: "",
    priority: "",
    description: "",
    category: "",
    date: "",
    when: "",
  });

  // const [items, setItems] = useLocalStorage("myData", []);
  const handleAdd = (item) => {
    item.preventDefault();
    const id = valueSave.length + 1;
    const addId = {id: id, ...value};
    let addTodos = [...valueSave];
    addTodos.push(addId);
    localStorage.setItem("myData", JSON.stringify(addTodos));
    setValuesave(addTodos);
    console.log(valueSave);
    // addTodos.push(valueSave)
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
