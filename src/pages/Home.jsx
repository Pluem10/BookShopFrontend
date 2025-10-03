import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Book from "../components/Bookitem";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://bookshop-api-er7t.onrender.com/api/books"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <Book items={items} />
        )}
      </div>
    </div>
  );
};

export default Home;
