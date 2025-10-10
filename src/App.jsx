import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Add from "./pages/AddBook.jsx";
import Book from "./pages/Book";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <Router>
      {" "}
      {/*  ต้องครอบด้วย Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/book" element={<Book />} />
        <Route path="/update" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
