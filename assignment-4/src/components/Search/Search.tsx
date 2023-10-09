import React, { ChangeEvent, useState } from 'react'

export type SearchProps = {
  onSearch: (value: string) => void
}

export function Search(props: SearchProps) {
  const { onSearch } = props
  const [value, setValue] = useState('')

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setValue(target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Here, we call the onSearch function and pass the value
      onSearch(value)
    }
  }

  return (
    <div className="flex flex-inline w-[400px] text-gray-600 border-2 border-black rounded-lg">
      <input
        type="search"
        name="search"
        placeholder={value}
        className="bg-white w-full text-sm focus:outline-none px-2 placeholder:text-gray-700 placeholder:font-semibold"
        onChange={(event) => searchHandler(event)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
