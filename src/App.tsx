import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.page";

function App() {

  const {darkMode} = useContext(ThemeContext);
  const appStyles = darkMode?"app dark":"app";

  return (
    <div className={appStyles}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
