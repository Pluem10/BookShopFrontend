import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookList } from "../components/BookList";
import Swal from "sweetalert2";
import BookService from "../services/book.service";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await BookService.getAllBooks();
        if (response.status === 200) {
          setBooks(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Book",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-300 mb-4 drop-shadow-lg"></h1>
          <div className="flex justify-center">
            
          </div>
        </div>

        {/* Book List Container */}
        <div className="bg-black bg-opacity-40 rounded-lg p-4">
          <BookList books={books} />
        </div>
      </div>
    </div>
  );
};

export default Books;
