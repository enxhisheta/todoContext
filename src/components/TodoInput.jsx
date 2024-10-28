import { useRef } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const inputRef = useRef("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      addTodo(text);
      inputRef.current.value = "";
      console.log("Todo re-render");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a new task" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
