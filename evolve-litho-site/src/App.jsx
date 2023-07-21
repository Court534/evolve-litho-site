import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacypolicy from "./components/Privacypolicy";
import Success from './components/Success'
import { Route, Routes } from "react-router-dom";

function MainComponents() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<MainComponents />} />
      </Routes>
    </div>
  );
}

export default App;
