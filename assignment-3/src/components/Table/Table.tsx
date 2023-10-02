import React, { useState, Dispatch, SetStateAction  } from "react"
import data from "../../assets/book.json"
import { DeleteForm, BookForm } from "../FormBook"

type TypeBook = typeof data

export function Table ({ dataFilter, bookList, setDataBook, showBookForm, setShowBookForm }
    : { dataFilter: TypeBook, bookList: TypeBook, setDataBook: (data) => void, showBookForm: boolean, setShowBookForm:  Dispatch<SetStateAction<boolean>> }) {

    const [openDelete, setOpenDelete] = useState(false)
    const [indexBook, setIndexBook] = useState(0)
    const [bookName, setBookName] = useState("")


    const handleDelete = (index) => {
        setDataBook([...bookList.filter((_, i) => i !== index)])
        setOpenDelete(false)
    }

    const handleAdddBook = (data) => {
        bookList.push(data)
        setDataBook(bookList)
    }

    return (
        <div className="flex mx-4 border-gray-100 dark:bg-gray-200 ">
            <table className="w-full text-left text-gray-800 dark:text-white border-collapse">
                <thead className="font-bold text-black bg-gray-100 dark:bg-dark-300 dark:text-white">
                    <tr className=" text-md font-medium border border-white  dark:bg-dark-300">
                        <th  className="px-6 py-3 border dark:border-white border-black" scope="col">
                            Name
                        </th>
                        <th  className="px-6 py-3 border dark:border-white border-black" scope="col">
                            Author
                        </th>
                        <th  className="px-6 py-3 border dark:border-white border-black" scope="col">
                            Topic
                        </th>
                        <th  className="px-6 py-3 border dark:border-white border-black" scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { dataFilter ? dataFilter.map((item, index) => (
                        <tr key={index}  className="text-md font-medium border border-white  dark:bg-dark-300" >
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.name}</td>
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.author}</td>
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.topic}</td>
                            <td className="border dark:border-white px-6 py-4 border-black " >
                                <button  className="text-pink-600 hover:text-pink-700 font-semibold" type="button" onClick={() => { 
                                    setBookName(item.name)
                                    setIndexBook(index) 
                                    setOpenDelete(true)
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) : bookList.map((item, index) => (
                        <tr key={index}  className="text-md font-medium border border-white  dark:bg-dark-300" >
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.name}</td>
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.author}</td>
                            <td className="border dark:border-white px-6 py-4 border-black" >{item.topic}</td>
                            <td className="border dark:border-white px-6 py-4 border-black " >
                                <button  className="text-pink-600 hover:text-pink-700 font-semibold" type="button" onClick={() => { 
                                    setBookName(item.name)
                                    setIndexBook(index) 
                                    setOpenDelete(true)
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <BookForm functionAddBook={handleAdddBook} setShow={setShowBookForm} show={showBookForm} />
            <DeleteForm  book={bookName} deleteBook={handleDelete}  index={indexBook} setOpenDelete={setOpenDelete} visible={openDelete} />
        </div>

    )
}