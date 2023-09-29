import { Avatar } from "./components/Icons"
import { ToggleTheme } from "./components/Toggle"
import { Input } from "./components/Input"
import { Button } from "./components/Buttons"
import { useState, useEffect, useCallback } from "react"
import { Pagination } from "./components/Pagination"
import { Table } from "./components/Table"

import Books from "./assets/book.json"

function App() {
  const [bookList, setBookList] = useState([])
  const [filtered, setFilterd] = useState(Books)
  const [result, setResult] = useState("")
  const [showBookForm, setShowBookForm] = useState(false)

  // const [currentPage, setCurrentPage] = useState(1)
  // const [booksPerPage] = useState(5)
  // const indexOfLastBooks = currentPage * booksPerPage
  // const indexOfFirstbooks = indexOfLastBooks - booksPerPage
  // const currentBooks = bookList.slice(indexOfFirstbooks, indexOfLastBooks)

  // const handleChangePage = useCallback((page) => {
  //   setCurrentPage(page)
  // }, [bookList])
  
  const onChange = (e)=> {
    setResult(e.target.value)
  }

  useEffect(() => { 
    setBookList(Books)
  }, [])

  useEffect(()=> {
    const results = !result ? bookList : filtered.filter(res => res.name.toLowerCase().includes(result))
    setFilterd(results)
  }, [result, bookList])

  return (
    <div className="App min-h-screen w-full flex flex-col bg-gray-100 dark:bg-dark-700 space-y-6">
      <header className="flex flex-row items-center h-auto w-full  py-4 px-4 justify-between border-b-2 border-gray-400">
          <a href="App" className="text-2xl font-bold dark:text-gray-100 whitespace-nowrap">Book Store</a>
          <div className="flex flex-row items-center pt-2 min-w-fit whitespace-nowrap">
            <ToggleTheme/>
              <Avatar/>
              <p className="text-lg font-medium mx-2 cursor-pointer dark:text-gray-100 ">John Doe</p>
            </div>
      </header>

      <div className="flex flex-row items-center h-auto w-full py-4 px-4 justify-between">
          <Input type="text" placeholder="Search books" className="darK:bg-gray-100 border border-black" 
                 value={result}
                 onChange={onChange}/>
          <Button type="button" fontweight="semibold" text="large" rounded onClick={() => setShowBookForm(true)}> Add Book </Button>
      </div>
      
      {
        bookList ? <>
            <Table show={showBookForm} setShow={setShowBookForm} dataSearch={filtered}  dataBook={bookList} setDataBook={setBookList}></Table>
            {/* <Pagination
              booksPerPage={booksPerPage}
              totalBooks={bookList.length}
              paginate={handleChangePage}
            /> */}
        </> : <h2 className="flex text-white w-full justify-center"> Loading </h2> 
        
      } 

      
    </div>
  )
}



export default App