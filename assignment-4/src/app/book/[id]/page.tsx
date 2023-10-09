'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { DataType } from '../../../types/Book'
import { Button } from '../../../components/Button'
import { useBookContext } from '../../BookProvider'
import DeleteBookForm from '../../DeleteForm'

function BookDetailsPage() {
  const {
    bookList,
    isDeletingBook,
    setIsDeletingBook,
    hideDeleteBookForm,
    setBookList,
  } = useBookContext()
  const router = useRouter()
  const params = useParams()
  const id = params.id
  const [bookDetails, setBookDetails] = useState<DataType | null>(null)

  const filterBookDetails = (id: string | undefined) => {
    if (!id) {
      return null
    }
    const filteredData = bookList.filter((item) => item.id.toString() === id)
    return filteredData.length > 0 ? filteredData : null
  }
  useEffect(() => {
    if (id) {
      const filteredData = filterBookDetails(id.toString())
      setBookDetails(filteredData)
      if (!filteredData) {
        router.push('../../not-found.tsx')
      }
    }
  }, [id])

  const handleDeleteBookClick = () => {
    setIsDeletingBook(true)
  }

  const handleDeleteBook = (bookId: number) => {
    const updatedBookList = bookList.filter((book) => book.id !== bookId)
    setBookList(updatedBookList)
    router.push('/')
  }

  return (
    <div>
      {bookDetails && (
        <div className="flex min-h-screen place-content-center items-center">
          <div className="text-left space-y-4">
            <Link href="/" className="text-pink-500 font-bold">
              Back to dashboard
            </Link>
            <p className="font-xl font-medium">
              <b>ID:</b> {bookDetails[0].id}
            </p>
            <p className="font-xl font-medium">
              <b>Name:</b> {bookDetails[0].name}
            </p>
            <p className="font-xl font-medium">
              <b>Author:</b> {bookDetails[0].author}
            </p>
            <p className="font-xl font-medium">
              <b>Topic:</b> {bookDetails[0].topic}
            </p>
            <Button appearance="link" size="lg" onClick={handleDeleteBookClick}>
              Delete
            </Button>
          </div>
        </div>
      )}

      {isDeletingBook && bookDetails && (
        <DeleteBookForm
          onDeleteBook={handleDeleteBook}
          onCloseDeleteForm={hideDeleteBookForm}
          bookName={
            bookList.find((book) => book.id === bookDetails[0].id)?.name || ''
          }
          bookId={
            bookList.find((book) => book.id === bookDetails[0].id)?.id || 0
          }
        />
      )}
    </div>
  )
}

export default BookDetailsPage
