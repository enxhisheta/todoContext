import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoProvider>
        <div>
          <h1>Todo List</h1>
          <TodoInput />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
