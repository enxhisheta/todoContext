import "./index.css";
import TranslatePage from "./pages/TranslatePage";
import { TranslatingProvider } from "./context/TranslatingContext";

const App = () => {
  return (
    <TranslatingProvider>
      <div className="App">
        <TranslatePage />
      </div>
    </TranslatingProvider>
  );
};

export default App;
