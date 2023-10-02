import React, { useState } from "react"
import { Button } from "../Button"
import { Input } from "../Input"
import { CloseIcons } from "../Icons" 

export function BookForm ( { show, setShow, functionAddBook } ) {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [topic, setTopic] = useState('')

    const changeName = (event) => {
      setName(event.target.value)
    }
    
    const changeAuthor = (event) => {
        setAuthor(event.target.value)
    }
    
    const changeTopic = (event) => {
        setTopic(event.target.value)
    }

    const onFormSubmit = (event) => {
      if ( name === "" || author === "" || topic === "") { 
        event.currentTarget.getAttribute('disabled')
      } else { 

        event.preventDefault()
        const value = {
            name,
            author,
            topic
        }
        functionAddBook(value)
        clearState()
        setShow(!show)
      }
    }
    
    const clearState = () => {
      setName('')
      setAuthor('')
    }

  return (
    <div style={{display: show ? 'contents' : 'none' }}>
      <div className="fixed flex w-full inset-x-0 inset-y-0	items-center justify-center z-1 bg-black-rgba text-black">
        <form className="flex w-[400px] min-h-fit flex-col p-4 border-2 rounded-md bg-white space-y-4"> 
          <div className="flex flex-row justify-between "> 
            <p className="text-lg font-medium cursor-pointer">Add book</p>
            <button type="button" onClick={() => setShow(!show)}> <CloseIcons/> </button>
          </div>
            
          <Input  label="Book" placeholder="Refactoring" type="text" value={name} required onChange={changeName}/>
          <Input  label="Author" placeholder="Martin Fowler" type="text" value={author} required onChange={changeAuthor} />

          <label className="ml-2 font-medium min-w-fit duration-300" htmlFor="topic">Topic
            <select className="mt-4 bg-transparent border-2 border-gray-300 placeholder:text-gray-800 text-md rounded-md focus:border-pink-600 w-full p-2" 
                    defaultValue={topic}  id="topic"  required  onChange={changeTopic}
                >
                <option value="" disabled hidden>Choose here</option>
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
            <Button appearance="primary" disabled={!name || !author || !topic}
             size="large" type="submit" onClick={onFormSubmit} >Create</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export function  DeleteForm ({ visible, setOpenDelete, book, deleteBook, index}) {
    if (!visible) return null
    
    return (
      <div className="fixed flex w-full inset-x-0 inset-y-0	items-center justify-center bg-black-rgba " >
        <div className="flex w-[400px] min-h-fit flex-col p-4 border-2 rounded-md bg-white space-y-8">
              <div className="flex flex-row justify-between"> 
                  <p className="text-lg font-bold text-black" >Delete book</p>
                  <button type="button" onClick={() => setOpenDelete(false)}> <CloseIcons /> </button>
              </div>
                  <p className="text-black" >Do you want to delete <b>{book}</b> book?</p>
              <div className="flex flex-row justify-evenly " > 
                  <Button size="large" type="submit" onClick={() => deleteBook(index)} >Delete</Button>
                  <Button size="large" type="button" onClick={() => setOpenDelete(false)} >Cancel</Button>
              </div>
          </div>
      </div>
    ) 
  } 