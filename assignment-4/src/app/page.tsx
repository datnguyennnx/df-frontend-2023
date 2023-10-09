'use client'

import React, { useState } from 'react'
import { PiMoonStarsFill, PiSunFill, PiUser } from 'react-icons/pi'
import { DataType, BookType } from '../types/Book'
import { useThemeContext } from '../contexts/ThemeContext'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import { Pagination } from '../components/Pagination'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { useBookContext } from './BookProvider'
import BookDetailsPage from './book/[id]/page'
import BookForm from './BookForm'
import DeleteBookForm from './DeleteForm'

export default function Home() {
  const {
    bookList,
    setBookList,
    isAddingBook,
    showAddBookForm,
    showDeleteBookForm,
    deleteBookId,
    isDeletingBook,
    hideAddBookForm,
    hideDeleteBookForm,
    filteredData,
    setFilteredData,
  } = useBookContext()
  const { darkMode, setDarkMode } = useThemeContext()

  const addBook = (newBook: BookType) => {
    setBookList([...bookList, newBook])
  }

  const handleDeleteBook = (bookId: number) => {
    const updatedBookList = bookList.filter((book) => book.id !== bookId)
    setBookList(updatedBookList)
  }

  const bookPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  const startIndex = (currentPage - 1) * bookPerPage
  const endIndex = startIndex + bookPerPage
  const slicedData = bookList.slice(startIndex, endIndex)

  const filterData = (query: string) => {
    if (query) {
      const filteredBooks = bookList.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredData(filteredBooks)
    } else {
      setFilteredData({} as DataType)
    }
  }
  return (
    <>
      <header className="flex flex-row w-full h-fit justify-between p-4">
        <a className="text-2xl font-bold whitespace-nowrap" href="/">
          Book Store
        </a>

        <div className="flex flex-row items-center min-w-fit whitespace-nowrap ">
          <button onClick={() => setDarkMode(!darkMode)} className="mx-4">
            {darkMode ? (
              <PiSunFill className="fill-yellow-400 stroke-yellow-400 w-8 h-8" />
            ) : (
              <PiMoonStarsFill className=" fill-black   w-8 h-8 " />
            )}
          </button>
          <PiUser className="fill-black w-8 h-8 dark:fill-white stroke-2	" />
          <p className="text-lg font-medium mx-2 cursor-pointer">John Doe</p>
        </div>
      </header>

      <div className="flex flex-row w-full justify-between p-4">
        <SearchBar onSearch={filterData} />
        <Button appearance="primary" onClick={showAddBookForm} size="lg">
          Add Book
        </Button>
      </div>

      <Table
        data={filteredData.length > 0 ? filteredData : slicedData}
        onOpenDeleteForm={showDeleteBookForm}
      />
      <Pagination
        totalItems={bookList.length}
        itemsPerPage={bookPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {isAddingBook && (
        <BookForm
          onBookAdd={addBook}
          onCloseForm={hideAddBookForm}
          bookList={bookList}
        />
      )}

      {isDeletingBook && (
        <DeleteBookForm
          onDeleteBook={handleDeleteBook}
          onCloseDeleteForm={hideDeleteBookForm}
          bookName={
            bookList.find((book) => book.id === deleteBookId)?.name || ''
          }
          bookId={bookList.find((book) => book.id === deleteBookId)?.id || 0}
        />
      )}
      <BookDetailsPage />
    </>
  )
}
