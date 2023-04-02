// Le projet a été intégralement nettoyé. il faudra recréer les fichiers indexe.css et App.css

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des composants
import Header from "./Components/Header";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}
