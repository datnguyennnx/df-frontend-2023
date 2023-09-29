import { useState } from "react"
import { BookForm, DeleteForm } from "../BookForm"

export const Table = ({ show, setShow, dataSearch, dataBook, setDataBook}) => { 
    const [openDelete, setOpenDelete] = useState(false)
    const [indexBook, setIndexBook] = useState()
    const [bookName, setBookName] = useState()

    const handleAdddBook = (data) => {
        dataBook.push(data)
        setDataBook(dataBook)
    }

    const handleDelete = (index) => {
        setDataBook([...dataBook.filter((v, i) => i !== index)])
        setOpenDelete(false)
    }

    const BookDisplay = dataBook.map(
        (book, index) => {
            return (
                    <tr key={index} className="text-md font-medium border border-white  dark:bg-dark-300">
                        <td className="border dark:border-white px-6 py-4 border-black">{book.name}</td>
                        <td className="border dark:border-white px-6 py-4 border-black">{book.author}</td>
                        <td className="border dark:border-white px-6 py-4 border-black">{book.topic}</td>
                        <td className="border dark:border-white px-6 py-4 border-black " >
                            <button key={index} type="button" className="text-pink-500 hover:text-pink-700" onClick={() => {
                                setBookName(book.name)
                                setIndexBook(index) 
                                setOpenDelete(true)
                            }} >
                                Delete
                            </button>
                        </td>
                    </tr>
            )
        }
    )
   
    
    return ( 
        <div className="flex mx-4 border-gray-100 dark:bg-gray-200 ">
            <table className="w-full text-left text-gray-800 dark:text-white border-collapse">
                <thead className="font-bold text-black bg-gray-100 dark:bg-dark-300 dark:text-white ">
                    <tr className=" text-md font-medium border border-white  dark:bg-dark-300">
                        <th scope="col" className="px-6 py-3 border dark:border-white border-black">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 border dark:border-white border-black">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3 border dark:border-white border-black">
                            Topic
                        </th>
                        <th scope="col" className="px-6 py-3 border dark:border-white border-black">
                            Action
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    { dataSearch ? dataSearch.map( (item, index) => (
                        <tr key={index} className="text-md font-medium border border-white  dark:bg-dark-300">
                        <td className="border dark:border-white px-6 py-4 border-black">{item.name}</td>
                        <td className="border dark:border-white px-6 py-4 border-black">{item.author}</td>
                        <td className="border dark:border-white px-6 py-4 border-black">{item.topic}</td>
                        <td className="border dark:border-white px-6 py-4 border-black " >
                            <button key={index} type="button"  className="text-pink-500 hover:text-pink-700" onClick={() => {
                                setBookName(item.name)
                                setIndexBook(index) 
                                setOpenDelete(true)
                            }}>
                                Delete
                            </button>
                        </td>
                    </tr>)) : BookDisplay
                    }
                </tbody>
            </table>
            <BookForm show={show} setShow={setShow} functionAddBook={handleAdddBook} ></BookForm>
            <DeleteForm visible={openDelete} setOpenDelete={setOpenDelete} deleteBook={handleDelete} index={indexBook} book={bookName}/>
        </div>
    )
}