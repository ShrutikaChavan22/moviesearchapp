import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar />
        <div className="min-h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
