import React from 'react'
import { FiX } from 'react-icons/fi'
import { Button } from '../components/Button'

interface DeleteBookFormProps {
  onDeleteBook: (bookId: number) => void
  onCloseDeleteForm: () => void
  bookName: string
  bookId: number
}

export default function DeleteBookForm({
  onDeleteBook,
  onCloseDeleteForm,
  bookName,
  bookId,
}: DeleteBookFormProps) {
  const handleDelete = () => {
    onDeleteBook(bookId)
    onCloseDeleteForm()
  }

  return (
    <div className="fixed flex w-full inset-x-0 inset-y-0 items-center bg-black-rgba justify-center z-1 text-black">
      <div className="flex w-[400px] min-h-fit flex-col p-4 border-2 rounded-md bg-white space-y-4">
        <div className="flex flex-row justify-between">
          <p className="text-lg font-medium">Delete</p>
          <button
            type="button"
            onClick={onCloseDeleteForm}
            className="cursor-pointer"
          >
            <FiX />
          </button>
        </div>
        <p className="text-md ">
          Are you sure you want to delete the book <strong>{bookName}</strong>?
        </p>
        <div className="flex justify-evenly">
          <Button appearance="primary" onClick={handleDelete} size="lg">
            Delete
          </Button>
          <Button appearance="default" onClick={onCloseDeleteForm} size="lg">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
