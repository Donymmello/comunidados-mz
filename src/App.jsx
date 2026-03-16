import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Curso from "./pages/Curso";
import PageLoader from "./components/PageLoader";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <PageLoader>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>

      <Footer />

      </PageLoader>

    </BrowserRouter>
  );
}

export default App;