import React, { useEffect, useState, useCallback } from "react"
import DataBook from "./assets/book.json"
import { Button } from "./components/Button"
import { Avatar } from "./components/Icons"
import { Toggle } from "./components/Toggle"
import { Input } from "./components/Input"
import { Table } from "./components/Table"
import Pagination from "./components/Pagination/Pagination"
import { useTheme } from "./context/ThemeContext"


function App() {
  const { darkMode, toggleTheme } = useTheme()
  const [bookList, setBookList] = useState(DataBook)
  const [filtered, setFilterd] = useState(DataBook)
  const [result, setResult] = useState("")
  const [showBookForm, setShowBookForm] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [bookPerPage] = useState(5)
  const indexOfLastBook = currentPage * bookPerPage
  const indexOfFirstBook = indexOfLastBook - bookPerPage

  const currentBook = bookList.slice(indexOfFirstBook, indexOfLastBook)
  const paginate = (pageNumber) => {setCurrentPage(pageNumber)}


  const onChangeSearch = useCallback((e) => {
    setResult(e.target.value)
  } , [])

  useEffect(() => {
    const results = !result ? bookList : filtered.filter(res => res.name.toLowerCase().includes(result))
    setFilterd(results)
  }, [result, onChangeSearch, filtered, bookList]) 
  

  return (
    <div className="App min-h-screen w-full flex flex-col bg-gray-100 dark:bg-dark-700 space-y-6">
        <header className="flex flex-row items-center h-auto w-full  py-4 px-4 justify-between border-b-2 border-gray-400">
          <a className="text-2xl font-bold dark:text-gray-100 whitespace-nowrap" href="App" >Book Store</a>
          
          <div className="flex flex-row items-center pt-2 min-w-fit whitespace-nowrap">
              <Toggle handleToggle={toggleTheme} > { darkMode ?  "Dark Mode": "Light Mode" }  </Toggle>
              <Avatar/>
              <p className="text-lg font-medium mx-2 cursor-pointer dark:text-gray-100 ">John Doe</p>
          </div>
        </header>

        <div className="flex flex-row items-center h-auto w-full my-24 py-4 px-4 justify-between border-gray-400">
              <Input 
                  placeholder="Search book" 
                  type="text"
                  value={result}
                  onChange={onChangeSearch}
                  />
              <Button appearance="primary" size="xl" type="button" onClick={() => setShowBookForm(true)} >Add Book</Button>
        </div>
        <Table bookList={bookList} dataFilter={result ? filtered : currentBook } setDataBook={setBookList} setShowBookForm={setShowBookForm} showBookForm={showBookForm}/>
        <Pagination 
           booksPerPage={bookPerPage}
           currentPage={currentPage}
           paginate={paginate}
           totalBooks={bookList.length}
        />
    </div>
  )
}
export default App
