// src/pages/Add.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://bookshop-api-er7t.onrender.com/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      if (response.ok) {
        alert("Book added successfully !!");
        setBook({ title: "", author: "", genre: "", price: "", imageUrl: "" });
      } else {
        alert("Failed to add book.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <NavBar />
      <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
        Add Book
      </h1>
      <div className="mb-5 flex flex-col gap-4 justify-center items-center max-w">
        {/* Input fields */}
      </div>
      <div className="flex gap-4 justify-center">
        <button className="btn btn-soft btn-success" onClick={handleSubmit}>
          Add Book
        </button>
        <button
          className="btn btn-soft btn-error"
          onClick={() => setBook({ title: "", author: "", genre: "", price: "", imageUrl: "" })}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBook; 
