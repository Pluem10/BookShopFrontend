import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UpdateBook = () => {
  // 1. get id from URL
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    coverImage: "",
    description: "",
    publisher: "",
    status: "AVAILABLE",
  });

  // 2. get book by id
  useEffect(() => {
    fetch("https://bookshop-api-er7t.onrender.com/api/books/" + id)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch item");
        return res.json();
      })
      .then((response) => {
        if (response && response.title) {
          setBook(response);
        } else if (response && response.data) {
          setBook(response.data);
        } else {
          setBook({
            title: "",
            author: "",
            category: "",
            publishYear: "",
            coverImage: "",
            description: "",
            publisher: "",
            status: "AVAILABLE",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        setBook({
          title: "",
          author: "",
          category: "",
          publishYear: "",
          coverImage: "",
          description: "",
          publisher: "",
          status: "AVAILABLE",
        });
      });
  }, [id]);

  // 3. handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // 4. submit update
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://bookshop-api-er7t.onrender.com/api/books/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      if (response.ok) {
        alert("Book updated successfully !!");
        setBook({
          title: "",
          author: "",
          category: "",
          publishYear: "",
          coverImage: "",
          description: "",
          publisher: "",
          status: "AVAILABLE",
        });
      } else {
        alert("Failed to update book.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
          Update Book / Item
        </h1>
      </div>
      <div className="mb-5 flex flex-col gap-3 justify-center items-center max-w">
        <label className="input flex gap-2 items-center w-2/3">
          Title :
          <input
            type="text"
            name="title"
            className="grow"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Author :
          <input
            type="text"
            name="author"
            className="grow"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Category :
          <input
            type="text"
            name="category"
            className="grow"
            placeholder="Category"
            value={book.category}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Publisher :
          <input
            type="text"
            name="publisher"
            className="grow"
            placeholder="Publisher"
            value={book.publisher}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Year :
          <input
            type="number"
            name="publishYear"
            className="grow"
            placeholder="Year"
            value={book.publishYear}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Description :
          <input
            type="text"
            name="description"
            className="grow"
            placeholder="Short description"
            value={book.description}
            onChange={handleChange}
          />
        </label>
        <label className="input flex gap-2 items-center w-2/3">
          Cover Image URL :
          <input
            type="text"
            name="coverImage"
            className="grow"
            placeholder="https://..."
            value={book.coverImage}
            onChange={handleChange}
          />
        </label>
        {book.coverImage && (
          <div className="flex items-center gap-2">
            <img className="h-32" src={book.coverImage} alt="Preview" />
          </div>
        )}
        <label className="input flex gap-2 items-center w-2/3">
          Status :
          <select
            name="status"
            className="select select-bordered grow"
            value={book.status}
            onChange={handleChange}
          >
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="BORROWED">BORROWED</option>
            <option value="RESERVED">RESERVED</option>
          </select>
        </label>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="btn btn-info text-1xl m-2"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          className="btn btn-secondary text-1xl m-2"
          onClick={() =>
            setBook({
              title: "",
              author: "",
              category: "",
              publishYear: "",
              coverImage: "",
              description: "",
              publisher: "",
              status: "AVAILABLE",
            })
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
