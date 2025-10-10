import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ComicList from "../components/ComicList";
import ComicService from "../services/comic.service";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getAllComics = async () => {
      try {
        const response = await ComicService.getAllComic();
        if (response.status === 200) {
          setComics(response.data.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Comics",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllComics();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-300 mb-4 drop-shadow-lg">
            Comics
          </h1>
          <div className="flex justify-center">
            
          </div>
        </div>

        {/* Comic List */}
        <div className="bg-black bg-opacity-40 rounded-lg p-6">
          <ComicList comics={comics} />
        </div>
      </div>
    </div>
  );
};

export default Comics;
