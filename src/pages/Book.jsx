import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "https://bookshop-api-er7t.onrender.com/api";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${API_BASE}/books`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบหนังสือเล่มนี้?")) return;
    try {
      await fetch(`${API_BASE}/books/${id}`, { method: "DELETE" });
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">📚 รายการหนังสือทั้งหมด</h1>
        <Link to="/add-book" className="btn btn-primary">
          ➕ เพิ่มหนังสือใหม่
        </Link>
      </div>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">ยังไม่มีหนังสือในระบบ</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-md hover:shadow-lg">
              <figure>
                <img
                  src={book.coverImage || "https://via.placeholder.com/200x250"}
                  alt={book.title}
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-xs text-gray-500">{book.publishYear}</p>
                <div className="flex justify-between mt-3">
                  <Link
                    to={`/update-book/${book.id}`}
                    className="btn btn-sm btn-outline btn-success"
                  >
                    แก้ไข
                  </Link>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleDelete(book.id)}
                  >
                    ลบ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Book;
