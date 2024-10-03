import Header from "./components/Header";
import Home from "./components/pages//Home";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Housing from "./components/housingPage/HousingPage";
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
            <Route exact path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
