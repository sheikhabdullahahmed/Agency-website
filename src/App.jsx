import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Product from "./Components/Product/Products";
import Services from "./Components/Service/Services";
import PropertyDetailsPage from "./PropertyDetailsPage";
import BlogPage from "./Components/Blog";

const Layout = ({ children, darkMode, darkModeToggle }) => (
  <>
    <Navbar darkMode={darkMode} darkModeToggle={darkModeToggle} />
    <div
      className={`transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </div>
  </>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Set dark mode class on the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const darkModeToggle = () => setDarkMode((prev) => !prev);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout darkMode={darkMode} darkModeToggle={darkModeToggle}>
                <Hero />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout darkMode={darkMode} darkModeToggle={darkModeToggle}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/propertylistings"
            element={
              <Layout darkMode={darkMode} darkModeToggle={darkModeToggle}>
                <Product />
              </Layout>
            }
          />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          {/* <Route
            path="/blogpage"
            element={<Layout darkMode={darkMode} darkModeToggle={darkModeToggle}><Services /></Layout>}
          /> */}
          <Route
            path="/sell-property"
            element={
              <Layout darkMode={darkMode} darkModeToggle={darkModeToggle}>
                <BlogPage />
              </Layout>
            }
          />
        </Routes>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={darkModeToggle}
          className="fixed bottom-4 right-4 p-3 bg-black dark:bg-white text-white dark:bg-black rounded-full shadow-lg"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
