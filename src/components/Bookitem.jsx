import React from "react";
import ItemCard from "./Card";

const Book = ({ items }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {items && items.length > 0 ? (
          items.map((item) => (
            <ItemCard
              key={item.itemId}
              itemId={item.itemId}
              title={item.title}
              author={item.author}
              category={item.category}
              publishYear={item.publishYear}
              coverImage={item.coverImage}
              itemType={item.itemType}
              description={item.description}
              publisher={item.publisher}
              status={item.status}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No items available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
