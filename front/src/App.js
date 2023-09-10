import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Accueil } from "./pages/accueil";
import { Behind } from "./pages/behind";
import { WhiteSpace } from "./pages/whitespace";
import { K } from "./pages/k";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Behind-Asteroids" element={<Behind />} />
            <Route path="/White-Space" element={<WhiteSpace />} />
            <Route path="/13k-2023" element={<K />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
