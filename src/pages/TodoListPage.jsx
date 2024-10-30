import { TodoProvider } from "../context/TodoContext";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoListPage;
