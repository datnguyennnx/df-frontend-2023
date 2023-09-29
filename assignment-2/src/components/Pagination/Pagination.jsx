import React from 'react'


export const Pagination = ({ booksPerPage, totalBooks, paginate}) => {
  const pageNumbers = []
  console.log(pageNumbers)
  for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i)
  } 

  return (
    <div>
    <ul className = "bg-transparent flex flex-row justify-end mx-4 ">
      { pageNumbers.map( number => (
        <li key = {number} className='text-white font-bold text-xl mx-2'>
          <a onClick = {() => paginate(number)} href = "!#">{number}</a>
        </li>
       ))}
      </ul>
    </div>
  )
}

