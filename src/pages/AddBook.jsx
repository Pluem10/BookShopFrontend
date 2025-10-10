import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://bookshop-api-er7t.onrender.com/api";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", publishYear: "", coverImage: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API_BASE}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    navigate("/books");
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">➕ เพิ่มหนังสือใหม่</h1>
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="ชื่อหนังสือ"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="ผู้เขียน"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="publishYear"
          placeholder="ปีที่พิมพ์"
          className="input input-bordered w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="coverImage"
          placeholder="URL ปกหนังสือ (ถ้ามี)"
          className="input input-bordered w-full"
          onChange={handleChange}
        />
        <button className="btn btn-primary w-full">บันทึก</button>
      </form>
    </div>
  );
};

export default AddBook;
