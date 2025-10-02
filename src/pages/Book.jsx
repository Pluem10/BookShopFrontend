import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Books from "../components/Bookitem";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFilteredBooks(books);
      return;
    }
    const result = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredBooks(result);
    console.log("keyword", keyword);
  };

  useEffect(() => {
    // call api : getAllBooks
    fetch("http://localhost:5000/api/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((response) => {
        if (Array.isArray(response)) {
          setBooks(response);
          setFilteredBooks(response);
        } else if (response && response.data) {
          setBooks(response.data);
          setFilteredBooks(response.data);
        } else {
          setBooks([]);
          setFilteredBooks([]);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setBooks([]);
        setFilteredBooks([]);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
          Book Shop
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center max-w">
        <label className="input flex items-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search books"
          />
        </label>
      </div>
      <Books books={filteredBooks} />
    </div>
  );
};

export default Book;
