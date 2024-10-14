import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";



const Home = lazy(()=> import("./pages/home/Home.page"));
const Company = lazy(()=> import("./pages/companies/Companies.page"));

function App() {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <Suspense fallback={<CustomLinearProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies">
            <Route index element={<Company />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
