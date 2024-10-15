import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";
import AddJob from "./pages/jobs/AddJob.page";

const Home = lazy(() => import("./pages/home/Home.page"));
const Company = lazy(() => import("./pages/companies/Companies.page"));
const AddCompany = lazy(() => import("./pages/companies/AddCompany.page"));
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const Candidates = lazy(() => import("./pages/candidates/Candidates.page"));


function App() {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Company />} />
              <Route path="add" element={<AddCompany />} />
            </Route>
            <Route path="/jobs">
              <Route index element={<Jobs />} />
              <Route path="add" element={<AddJob />} />
            </Route>
            <Route path="/candidates">
              <Route index element={<Candidates />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
