import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JournalList from "../components/JournalList";
import Swal from "sweetalert2";
import JournalService from "../services/journal.service";

const Journals = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const getAllJournal = async () => {
      try {
        const response = await JournalService.getAllJournal();
        if (response.status === 200) {
          setJournals(response.data.data || []); 
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Journals",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllJournal();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-300 mb-4 drop-shadow-lg">
            Journals
          </h1>
          <div className="flex justify-center">

          </div>
        </div>

        <div className="bg-black bg-opacity-40 rounded-lg p-6">
          {journals && journals.length > 0 ? (
            <JournalList journals={journals} />
          ) : (
            <p className="text-center text-gray-400 text-lg">
              There is no journal yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journals;
