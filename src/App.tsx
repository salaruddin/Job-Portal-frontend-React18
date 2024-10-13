import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";

function App() {

  const {darkMode} = useContext(ThemeContext);
  const appStyles = darkMode?"app dark":"app";

  return (
    <div className={appStyles}>
      <h1>helloworld</h1>
    </div>
  );
}

export default App;
