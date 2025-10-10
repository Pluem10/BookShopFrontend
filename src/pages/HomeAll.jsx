import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import ComicCard from "../components/ComicCard";
import JournalCard from "../components/JournalCard";
import BookService from "../services/book.service";
import ComicService from "../services/comic.service";
import JournalService from "../services/journal.service";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const HomeAll = () => {
  const [books, setBooks] = useState([]);
  const [comics, setComics] = useState([]);
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [bRes, cRes, jRes] = await Promise.all([
          BookService.getAllBooks(),
          ComicService.getAllComics(),
          JournalService.getAllJournals(),
        ]);

        if (bRes?.status === 200) setBooks(bRes.data.data || []);
        if (cRes?.status === 200) setComics(cRes.data.data || []);
        if (jRes?.status === 200) setJournals(jRes.data.data || []);
      } catch (error) {
        Swal.fire({
          title: "Load items",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const section = (title, items, CardComponent, emptyText = "No items") => (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-red-300">{title}</h2>
        <Link
          to={`/${title.toLowerCase().replace(/\s+/g, "") === "books" ? "addBook" : title.toLowerCase().includes("comic") ? "addComic" : title.toLowerCase().includes("journal") ? "addJournal" : ""}`}
          className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded-full transition"
        >
          Add
        </Link>
      </div>

      {loading ? (
        <div className="text-gray-300">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-gray-400">{emptyText}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const id = item._id ?? item.id ?? item.itemId;
            return (
              <CardComponent
                key={id}
                itemId={id}
                title={item.title || item.name}
                author={item.author || item.writer || ""}
                genre={item.genre || item.category || ""}
                publicationDate={item.publicationDate || item.publishedAt || item.year || ""}
                isbn={item.isbn || item.code || ""}
                coverImage={item.coverImage || item.image || item.thumbnail || ""}
              />
            );
          })}
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-300 mb-2 drop-shadow-lg">Home — All Items</h1>
          <p className="text-gray-300">รวมรายการจาก Books, Comics และ Journals</p>
        </div>

        <div className="bg-black bg-opacity-40 rounded-lg p-6">
          {section("Books", books, BookCard, "No books found")}
          {section("Comics", comics, ComicCard, "No comics found")}
          {section("Journals", journals, JournalCard, "No journals found")}
        </div>
      </div>
    </div>
  );
};

export default HomeAll;