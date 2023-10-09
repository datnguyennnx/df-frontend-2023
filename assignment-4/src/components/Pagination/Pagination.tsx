import React from 'react'

type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li>
          <button
            key={i}
            className={`${
              currentPage === i ? 'font-bold' : ''
            } inline-block px-3 py-1 cursor-pointer hover:bg-pink-500 rounded-lg `}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>,
      )
    }
    return pages
  }

  return (
    <div className="flex justify-end m-4">
      <ul className="flex space-x-2">{renderPageNumbers()}</ul>
    </div>
  )
}

export default Pagination
