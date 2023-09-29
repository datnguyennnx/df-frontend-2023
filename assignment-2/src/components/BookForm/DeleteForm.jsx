import React from "react";
import { Button } from "../Buttons";
import { CloseIcons } from "../Icons";

export const  DeleteForm = ({ visible, setOpenDelete, book, deleteBook, index}) => {
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
                <Button type="submit" onClick={() => deleteBook(index)} fontweight="semibold" text="medium" rounded size="large">Delete</Button>
                <Button type="button" onClick={() => setOpenDelete(false)} fontweight="semibold" text="medium" rounded size="large">Cancel</Button>
            </div>
        </div>
    </div>
  ) 
} 