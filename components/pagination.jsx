import React from "react";

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-9 text-base list-none">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3.5 h-9 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-var(--gray-700, #344054)"
            style={{
              color: "var(--gray-700, #344054)",
              border: "1px solid var(--gray-300, #D0D5DD)",
            }}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#"
              className={`flex items-center justify-center no-underline px-3.5 h-9 leading-tight bg-white border ${
                currentPage === page
                  ? "text-blue-600 border-blue-300 bg-blue-50"
                  : "text-gray-500"
              }`}
              style={{
                color: "var(--gray-700, #344054)",
                border: "1px solid var(--gray-300, #D0D5DD)",
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3.5 h-9 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-var(--gray-700, #344054)"
            style={{
              color: "var(--gray-700, #344054)",
              border: "1px solid var(--gray-300, #D0D5DD)",
            }}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
