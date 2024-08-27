import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Food from "./pages/Food";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/foods" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
