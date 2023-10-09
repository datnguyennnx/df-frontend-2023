import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { DataType, BookType } from '../types/Book'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

interface BookFormProps {
  onBookAdd: (newBook: BookType) => void
  onCloseForm: () => void
  bookList: DataType
}

export default function BookForm({
  onBookAdd,
  onCloseForm,
  bookList,
}: BookFormProps) {
  const [newBook, setNewBook] = useState<BookType>({
    id: 0,
    name: '',
    author: '',
    topic: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setNewBook({ ...newBook, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextId = Math.max(...bookList.map((book) => book.id), 0) + 1
    const newBookRecord = { ...newBook, id: nextId }

    onBookAdd(newBookRecord)
    setNewBook({ id: nextId, name: '', author: '', topic: '' })
    onCloseForm()
  }

  return (
    <div className="fixed flex w-full inset-x-0 inset-y-0 items-center bg-black-rgba justify-center z-1 text-black">
      <form
        onSubmit={handleSubmit}
        className="flex w-[400px] min-h-fit flex-col p-4 border-2 rounded-md bg-white space-y-4"
      >
        <div className="flex flex-row justify-between mx-2">
          <p className="text-lg font-medium ">Add book</p>
          <button
            type="button"
            onClick={onCloseForm}
            className="cursor-pointer"
          >
            <FiX />
          </button>
        </div>
        <Input
          type="text"
          label="Book"
          name="name"
          placeholder="Refactoring"
          value={newBook.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          label="Author"
          name="author"
          placeholder="Martin Fowler"
          value={newBook.author}
          onChange={handleChange}
          required
        />
        <label
          className="ml-2 font-medium min-w-fit duration-300"
          htmlFor="topic"
        >
          Topic
          <select
            className="mt-4 bg-transparent border-2 border-gray-300 placeholder:text-gray-800 text-md rounded-md focus:border-pink-600 w-full p-2"
            id="topic"
            name="topic"
            value={newBook.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Choose here
            </option>
            <option value="Algorithms">Algorithms</option>
            <option value="DevOps">DevOps</option>
            <option value="Database">Database</option>
            <option value="Design Patterns">Design Patterns</option>
            <option value="Network">Network</option>
            <option value="Programming">Programming</option>
            <option value="Software Life">Software Life</option>
            <option value="System Design">System Design</option>
          </select>
        </label>

        <div className="flex justify-end">
          <Button
            appearance="primary"
            disabled={!newBook}
            size="lg"
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
