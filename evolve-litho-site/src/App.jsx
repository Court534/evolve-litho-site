import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacypolicy from "./components/Privacypolicy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path='/privacypolicy' element={<Privacypolicy />} />
      </Routes>
    </div>
  );
}

export default App;
