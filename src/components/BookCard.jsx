import BookService from "../services/book.service";
import React from "react";
import { Link } from "react-router-dom";

export const BookCard = (props) => {
    const handleDelete = async (itemId) => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this Book?"
        );
        if (!isConfirmed) return;

        try {
            const response = await BookService.deleteBook(itemId)
            if (response.status === 200) {
                alert("Book deleted successfully!(ลบเเล้ว)");
                window.location.reload();
              
            }
          } catch (error) {
            console.log(error);
          }
        };

  return (
    <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg transition">
      <figure>
        <img
          src={coverImage || "https://via.placeholder.com/300x200"}
          alt={title}
          className="h-56 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">
          {title}
          <div className="badge badge-secondary ml-2">{itemType}</div>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-2 text-sm">
          <p><b>ผู้แต่ง:</b> {author || "Unknown"}</p>
          <p><b>หมวดหมู่:</b> {category}</p>
          <p><b>สำนักพิมพ์:</b> {publisher || "-"}</p>
          <p><b>ปี:</b> {publishYear}</p>
      
        </div>
        <div className="card-actions justify-end mt-3">
          <a href={"/update/" + itemId} className="btn btn-warning btn-sm">
            Edit
          </a>
          <button onClick={() => handleDelete(itemId)} className="btn btn-error btn-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BookCard({ book }) {
  if (!book) return null;
  const id = book.id || book._id || "";
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{book.title || "Untitled"}</h3>
      <p className="text-sm text-gray-600">Author: {book.author || "-"}</p>
      <p className="text-sm">Price: {book.price ?? "-"}</p>
      <div className="mt-2">
        {id ? <Link to={`/books/${id}`} className="text-blue-600">View</Link> : null}
      </div>
    </div>
  );
}
