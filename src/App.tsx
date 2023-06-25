import "./App.css";
import useSmoothScroll from "./components/hooks/useSmoothScroll";
import Templates from "./components/templates";

function App() {
  useSmoothScroll();

  return <Templates />;
}

export default App;
