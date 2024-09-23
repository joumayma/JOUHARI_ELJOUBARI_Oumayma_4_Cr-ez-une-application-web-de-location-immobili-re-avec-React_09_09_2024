import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Livre from "./Data/logements.json";
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
            <Route path="/livre/:id" element={<Livre />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
