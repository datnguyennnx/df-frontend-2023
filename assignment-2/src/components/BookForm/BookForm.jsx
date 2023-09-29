import { Button } from "../Buttons"
import { Input } from "../Input"
import { CloseIcons } from "../Icons" 
import { Label } from "../Label"
import { useState } from "react"
export const BookForm = ( { show, setShow, functionAddBook } ) => {
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
        return 0
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
      <div className="fixed flex w-full inset-x-0 inset-y-0	items-center justify-center z-1 bg-black-rgba">
        <form className="flex w-[400px] min-h-fit flex-col p-4 border-2 rounded-md bg-white space-y-4"> 
          <div className="flex flex-row justify-between "> 
            <p className="text-lg font-medium cursor-pointer">Add book</p>
            <button type="button" onClick={() => setShow(!show)}> <CloseIcons/> </button>
          </div>
            
          <Input value={name} onChange={changeName} fullWidth="full" type="text" label="Book" placeholder="Refactoring" isRequired rounded="md"/>
          <Input value={author} onChange={changeAuthor} fullWidth="full" type="text" label="Author" placeholder="Martin Fowler" isRequired rounded="md"/>

          <Label id="topic">Topic</Label>
          <select id="topic" defaultValue={topic} onChange={changeTopic} required
              className="bg-transparent border-2 border-gray-300 placeholder:text-gray-800 text-md rounded-md focus:border-pink-600 w-full p-2">
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
          
          <div className="flex justify-end">
            <Button disabled={!name || !author || !topic}
            type="submit" onClick={onFormSubmit} fontweight="semibold" text="medium" rounded size="large">Create</Button>
          </div>
        </form>
      </div>
    </div>
  )
}