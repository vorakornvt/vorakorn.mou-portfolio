// Import npm packages
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Import components
import Layout from "./components/layout/Layout";
import Loader from "./components/features/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={loading ? <Loader /> : <Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
