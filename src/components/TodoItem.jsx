/* eslint-disable react/prop-types */
import { useTodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodoContext();

  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
