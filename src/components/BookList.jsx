import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard"; 

export const BookList = ({ books  }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
      {books && books .map((book) => {
        return (
          <BookCard
             key={book.itemId}
              coverImage={book.coverImage}
              itemId={book.itemId}
              title={book.title}
              author={book.author}
              isbn={book.isbn}
              genre={book.genre}
              publicationDate={book.publicationDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;
