import api from "./api.js";

const BOOK_API = import.meta.env.VITE_BOOK_API || import.meta.env.BOOK_API || "/api/books";

const getAllBooks = async () => {
  const res = await api.get(BOOK_API);
  return res.data;
};

const getBookById = async (id) => {
  const res = await api.get(`${BOOK_API}/${id}`);
  return res.data;
};

const editBookById = async (id, book) => {
  const res = await api.put(`${BOOK_API}/${id}`, book);
  return res.data;
};

const createBook = async (data) => {
  const res = await api.post(`${BOOK_API}`, data);
  return res.data;
};

const deleteBook = async (id) => {
  const res = await api.delete(`${BOOK_API}/${id}`);
  return res.data;
};

const BookService = {
  getAllBooks,
  getBookById,
  editBookById,
  createBook,
  deleteBook,
};

export default BookService;
