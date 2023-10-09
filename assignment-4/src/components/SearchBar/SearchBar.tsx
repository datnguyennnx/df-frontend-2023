'use client'

import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <div className="flex flex-row w-full">
      <input
        type="text"
        placeholder="Search by book name"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="px-3 py-2 border rounded-lg placeholder:font-medium text-sm text-gray-700 border-black"
      />
    </div>
  )
}
