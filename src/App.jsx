import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import baj from "./pages/baj";
import Author1 from "./pages/Author1";
import Author2 from "./pages/Author2";
import Author3 from "./pages/Author3";
import Author4 from "./pages/Author4";
import Author5 from "./pages/Author5";
import Author6 from "./pages/Author6";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/baj" element={<baj />} />
        <Route path="/author1" element={<Author1 />} />
        <Route path="/author2" element={<Author2 />} />
        <Route path="/author3" element={<Author3 />} />
        <Route path="/author4" element={<Author4 />} />
        <Route path="/author5" element={<Author5 />} />
        <Route path="/author6" element={<Author6 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;