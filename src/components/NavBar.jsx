import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;


  const isBookPath = ["/", "/books", "/updateBook", "/addBook"].some((p) =>
    path.startsWith(p)
  );
  const isComicPath = ["/comics", "/updateComic", "/addComic"].some((p) =>
    path.startsWith(p)
  );
  const isJournalPath = ["/journals", "/updateJournal", "/addJournal"].some((p) =>
    path.startsWith(p)
  );

  let addButtonText = "Add Item";
  let addButtonLink = "/add";

  if (isBookPath) {
    addButtonText = "Add Book";
    addButtonLink = "/add";
  } else if (isComicPath) {
    addButtonText = "Add Comic";
    addButtonLink = "/addComic";
  } else if (isJournalPath) {
    addButtonText = "Add Journal";
    addButtonLink = "/addJournal";
  }

  const menuItems = [
    { name: "Home", url: "/" },
    {name: "Books", url: "/books" },
    { name: "Journals", url: "/journals" },
    { name: "Comics", url: "/comics" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item) => (
              <li key={item.url}>
                <Link
                  to={item.url}
                  className={`${
                    path.startsWith(item.url)
                      ? "font-bold text-primary underline underline-offset-4"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl font-bold">
          📚 MyLibrary
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          {menuItems.map((item) => (
            <li key={item.url}>
              <Link
                to={item.url}
                className={`${
                  path.startsWith(item.url)
                    ? "font-bold text-primary underline underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-2">
        <Link
          to={addButtonLink}
          className="btn btn-outline btn-accent"
        >
          {addButtonText}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
