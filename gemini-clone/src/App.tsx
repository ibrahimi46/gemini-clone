import useSystemTheme from "./hooks/useSystemTheme";
import MainPage from "./MainPage";

function App() {
  useSystemTheme();
  return <MainPage />;
}

export default App;
