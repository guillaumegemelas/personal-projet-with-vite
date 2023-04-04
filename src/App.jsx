// Le projet a été intégralement nettoyé. il faudra recréer les fichiers indexe.css et App.css

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des composants
import Header from "./Components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* --test de routing avec react router dom fonctionne avec Vite */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}
