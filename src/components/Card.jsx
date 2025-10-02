import React from "react";

const ItemCard = ({ 
  itemId,
  title,
  author,
  category,
  publishYear,
  coverImage,
  itemType,
  description,
  publisher,
  status
}) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบไอเท็มนี้?");
    if (!confirmDelete) return;

    try {
      const response = await fetch("https://bookshop-api-er7t.onrender.com/api/books/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Item deleted successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete item.");
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
          <p><b>สถานะ:</b> <span className="badge badge-outline">{status}</span></p>
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

export default ItemCard;
