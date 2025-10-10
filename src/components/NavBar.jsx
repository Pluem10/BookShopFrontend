import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isBookPath = ["/books", "/updateBook", "/addBook"].some(p =>
    path.startsWith(p)
  );
  const isComicPath = ["/comics", "/updateComic", "/addComic"].some(p =>
    path.startsWith(p)
  );
  const isJournalPath = ["/journals", "/updateJournal", "/addJournal"].some(p =>
    path.startsWith(p)
  );

  let addButtonText = "Add Item";
  let addButtonLink = "/addBook";

  if (isBookPath) {
    addButtonText = "Add Book";
    addButtonLink = "/addBook";
  } else if (isComicPath) {
    addButtonText = "Add Comic";
    addButtonLink = "/addComic";
  } else if (isJournalPath) {
    addButtonText = "Add Journal";
    addButtonLink = "/addJournal";
  }

  const menuItems = [
    { name: "HomeAll", url: "/HomeAll" },
    { name: "Books", url: "/" },
    { name: "Journals", url: "/journals" },
    { name: "Comics", url: "/comics" },
  ];

  return (
    <div className="shadow-md bg-gradient-to-r from-black via-gray-900 to-red-800">
      <div className="navbar max-w-7xl mx-auto px-4 py-3">
       
        <div className="navbar-start">
          
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="text-white hover:text-red-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl font-bold text-red-300">
            📔Book Store
          </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className={`text-white font-semibold hover:text-red-300 transition-colors duration-200 ${
                    path.startsWith(item.url) ? "underline underline-offset-4 text-red-300" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="navbar-end">
          <Link
            to={addButtonLink}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            {addButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
