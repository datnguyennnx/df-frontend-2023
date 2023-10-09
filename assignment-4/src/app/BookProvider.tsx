'use client'

import React, {
  Dispatch,
  createContext,
  useContext,
  useState,
  useMemo,
  SetStateAction,
} from 'react'
import Data from '../assets/book.json'
import { DataType } from '../types/Book'

interface BookContextType {
  bookList: DataType
  filteredData: DataType
  setFilteredData: Dispatch<SetStateAction<DataType>>
  setBookList: Dispatch<SetStateAction<DataType>>
  setIsDeletingBook: (isDeleting: boolean) => void
  isAddingBook: boolean
  showAddBookForm: () => void
  showDeleteConfirmation: (bookId: number) => void
  hideAddBookForm: () => void
  isDeletingBook: boolean
  showDeleteBookForm: (bookId: number) => void
  hideDeleteBookForm: () => void
  deleteBookId: number | null
}

const BookContext = createContext<BookContextType | undefined>(undefined)

export const useBookContext = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [bookList, setBookList] = useState<DataType>(Data)
  const [filteredData, setFilteredData] = useState<DataType>({} as DataType)
  const [isAddingBook, setIsAddingBook] = useState(false)
  const [isDeletingBook, setIsDeletingBook] = useState(false)
  const [deleteBookId, setDeleteBookId] = useState<number | null>(null)

  const showAddBookForm = () => {
    setIsAddingBook(true)
    setDeleteBookId(null)
  }

  const hideAddBookForm = () => {
    setIsAddingBook(false)
  }

  const showDeleteBookForm = (bookId: number) => {
    setIsDeletingBook(true)
    setDeleteBookId(bookId)
  }

  const showDeleteConfirmation = (bookId: number) => {
    setIsAddingBook(false)
    setDeleteBookId(bookId)
  }

  const hideDeleteBookForm = () => {
    setIsDeletingBook(false)
    setDeleteBookId(null)
  }

  const contextValue: BookContextType = {
    bookList,
    setBookList,
    isAddingBook,
    showAddBookForm,
    showDeleteConfirmation,
    hideAddBookForm,
    isDeletingBook,
    setIsDeletingBook,
    showDeleteBookForm,
    hideDeleteBookForm,
    deleteBookId,
    filteredData,
    setFilteredData,
  }

  return (
    <BookContext.Provider value={useMemo(() => contextValue, [contextValue])}>
      {children}
    </BookContext.Provider>
  )
}
