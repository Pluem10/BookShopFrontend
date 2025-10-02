import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add.jsx";
import Book from "./pages/Book"; 
import UpdateBook from "./pages/UpdateBook";
import viteLogo from '/vite.svg'

function App() {
  return (
    <Router>
      <div>
        <h1>Book Shop</h1>
        <img src={viteLogo} alt="Vite Logo" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
