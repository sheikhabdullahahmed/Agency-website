import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'; 
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Product from './Components/Product/Products';
import BlogPage from './Components/Blog/index'
import PropertyDetailsPage from "./PropertyDetailsPage";
// import Footer from "./Components/Footer/Footer"; 
// import Number from './Components/2number/index'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
      {/* <Navbar /> */}
      <div style={{ paddingTop: "60px" }}> {/* Adjust the padding based on your Navbar height */}
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/propertylistings" element={<Layout><Product /></Layout>} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        {/* <Route path="/service" element={<Layout><Service /></Layout>} /> */}
        <Route path="/blogPage" element={<Layout><BlogPage /></Layout>} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
