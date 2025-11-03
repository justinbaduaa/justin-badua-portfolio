import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Placeholder from "./pages/Placeholder.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cv" element={<CV />} />
        <Route path="projects/:slug" element={<Placeholder title="Project" />} />
        <Route path="sketch/:slug" element={<Placeholder title="Sketch" />} />
      </Route>
      <Route path="*" element={<Placeholder title="Coming Soon" />} />
    </Routes>
  );
};

export default App;