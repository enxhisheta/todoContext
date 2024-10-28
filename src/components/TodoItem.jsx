/* eslint-disable react/prop-types */
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodos();

  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
