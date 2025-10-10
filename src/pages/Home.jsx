import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookService from "../services/book.service.js";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    BookService.getAllBooks()
      .then((data) => {
        console.log("BookService.getAllBooks ->", data);
        if (!mounted) return;
        const list = Array.isArray(data) ? data : data?.books ?? [];
        setItems(list);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error("Error fetching items:", err);
        setError(err?.message || "Failed to fetch items");
        setItems([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [reload]);

  const handleRetry = () => setReload((r) => r + 1);

  return (
    <div className="container mx-auto p-4">
      {error ? (
        <div className="text-center">
          <p className="text-red-600 mb-2">Error: {error}</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      ) : (
        <BookList books={items} loading={loading} />
      )}
    </div>
  );
};

export default Home;