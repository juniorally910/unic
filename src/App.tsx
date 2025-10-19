import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage"
import ServicesPage from "./Components/Pages/ServicesPage";
import ProjectsPage from "./Components/Pages/ProjectPage";
import ContactPage from "./Components/Pages/ContactPage";



function App() {


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element ={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        < Footer />
      </Router>
    </>
  )
}

export default App
