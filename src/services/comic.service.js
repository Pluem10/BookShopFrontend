import api from "./api.js";
const COMIC_API = import.meta.env.VITE_COMIC_API;


const getAllComic = async () => {
  return await api.get(COMIC_API);
};


const getComicById = async (id) => {
  return await api.get(`${COMIC_API}/${id}`);
};

const editComicById = async (id, comic) => {
  return await api.put(`${COMIC_API}/${id}`, comic);
};


const createComic = async (comic) => {
  return await api.post(`${COMIC_API}`, comic);
};

const deleteComic = async (id) => {
  return await api.delete(`${COMIC_API}/${id}`);
};

const ComicService = {
  getAllComic,
  getComicById,
  editComicById,
  createComic,
  deleteComic,
};

export default ComicService;
