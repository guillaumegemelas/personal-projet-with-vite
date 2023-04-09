// Le projet a été intégralement nettoyé. il faudra recréer les fichiers indexe.css et App.css

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des composants
import Header from "./Components/Header";
// import Sidebar from "./Components/Sidebar";

//incompatibilite entre Sidebar et bootstrap pour la font et la mise en page

//import des pages
import Home from "./pages/Home";
import Business from "./pages/Business";
import Sport from "./pages/Sport";
import Health from "./pages/Health";

//impopt des icones Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
library.add(faHouse);

export default function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          {/* --test de routing avec react router dom fonctionne avec Vite */}
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </Router>
    </div>
  );
}
