/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { useTodoContext };
