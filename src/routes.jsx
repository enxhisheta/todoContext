import { Routes, Route } from "react-router-dom";
import TranslatePage from "./pages/TranslatePage";
import TodoListPage from "./pages/TodoListPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TranslatePage />} />
    <Route path="/todo" element={<TodoListPage />} />
  </Routes>
);

export default AppRoutes;
