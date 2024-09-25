import Header from "./components/Header";
import Home from "./components/pages//Home";
import About from "./components/pages/About";
import AboutCollapse from "./components/pages/AboutCollapse";
import Footer from "./components/Footer";
import Housing from "./components/housingPage/Housing";
import NoMatch from "./components/NoMatch/NoMatch";
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
            <Route exact path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
