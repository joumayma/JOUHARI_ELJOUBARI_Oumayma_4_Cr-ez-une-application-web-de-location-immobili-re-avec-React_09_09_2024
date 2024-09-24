import Header from "./components/Header";
import Home from "./components/pages//Home";
import About from "./components/pages/About";
import AboutCollapse from "./components/pages/AboutCollapse";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutcollapse" element={<AboutCollapse />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
