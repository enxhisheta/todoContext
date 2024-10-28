import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, clearTodos } = useTodos();

  return (
    <div>
      {todos.length > 0 ? (
        <>
          <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          <button onClick={clearTodos}>Delete All</button>
        </>
      ) : (
        <p>No tasks yet!</p>
      )}
    </div>
  );
};

export default TodoList;
