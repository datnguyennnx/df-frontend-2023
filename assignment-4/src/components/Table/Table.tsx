import React from 'react'
import Link from 'next/link'
import { DataType } from '../../types/Book'

type TableProps = {
  data: DataType
  onOpenDeleteForm: (bookId: number) => void
}

export function Table({ data, onOpenDeleteForm }: TableProps) {
  return (
    <div className="flex mx-4 border-gray-100 dark:bg-gray-200 ">
      <table className="w-full text-left text-gray-800 dark:text-white border-collapse">
        <thead className="font-bold text-black bg-gray-100 dark:bg-dark-300 dark:text-white">
          <tr className=" text-md font-medium border border-white  dark:bg-dark-300">
            <th
              className="px-6 py-3 border dark:border-white border-black"
              scope="col"
            >
              Name
            </th>
            <th
              className="px-6 py-3 border dark:border-white border-black"
              scope="col"
            >
              Author
            </th>
            <th
              className="px-6 py-3 border dark:border-white border-black"
              scope="col"
            >
              Topic
            </th>
            <th
              className="px-6 py-3 border dark:border-white border-black"
              scope="col"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.id}
                className="text-md font-medium border border-white  dark:bg-dark-300"
              >
                <td className="border dark:border-white px-6 py-4 border-black">
                  {item.name}
                </td>
                <td className="border dark:border-white px-6 py-4 border-black">
                  {item.author}
                </td>
                <td className="border dark:border-white px-6 py-4 border-black">
                  {item.topic}
                </td>
                <td className="border dark:border-white px-6 py-4 border-black flex-row">
                  <Link
                    href="/book/[id]"
                    as={`book/${item.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold mr-2"
                  >
                    View
                  </Link>
                  <button
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                    type="button"
                    onClick={() => onOpenDeleteForm(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
