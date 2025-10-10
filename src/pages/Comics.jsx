import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "https://bookshop-api-er7t.onrender.com/api";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComics = async () => {
    try {
      const res = await fetch(`${API_BASE}/comics`);
      const data = await res.json();
      setComics(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-primary mb-6">📖 การ์ตูนทั้งหมด</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {comics.map((c) => (
          <div key={c.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={c.coverImage || "https://via.placeholder.com/200x250"}
                alt={c.title}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comics;
