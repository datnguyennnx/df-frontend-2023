import React from "react";

export default function Pagination({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='flex flex-row mx-4 justify-end text-black'>
      <nav className='block'>
        <ul className='flex flex-wrap'>
          <li>
            {pageNumbers.map((number, index) => (
              <button key={index}
                className = {
                    currentPage === number
                    ? "bg-white hover:bg-pink-500 focus:bg-pink-700 inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full mx-1"
                    : "bg-white hover:bg-pink-500 inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full mx-1"
                }
                onClick = {() => {
                    paginate(number)
                  }}>
                {number}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  )
}