import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TranslatePage from "./pages/TranslatePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TodoListPage />} />
    <Route path="/translating" element={<TranslatePage />} />
  </Routes>
);

export default AppRoutes;
