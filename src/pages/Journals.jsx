import React, { useEffect, useState } from "react";

const API_BASE = "https://bookshop-api-er7t.onrender.com/api";

const Journals = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJournals = async () => {
    try {
      const res = await fetch(`${API_BASE}/journals`);
      const data = await res.json();
      setJournals(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-primary mb-6">📰 วารสารทั้งหมด</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journals.map((j) => (
          <div key={j.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={j.coverImage || "https://via.placeholder.com/200x250"}
                alt={j.title}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title">{j.title}</h3>
              <p className="text-sm text-gray-500">{j.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journals;
