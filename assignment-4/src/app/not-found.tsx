'use client'

import Link from 'next/link'
import Image from 'next/image'
import Engineer from '../components/svg/not_found.svg'
import { useThemeContext } from '../contexts/ThemeContext'

export default function NotFound() {
  useThemeContext()

  return (
    <div className="flex min-h-screen px-4 place-content-center items-center ">
      <div className="text-center">
        <Image src={Engineer} height={200} width={600} alt="Error" priority />
        <h1 className="mt-6 text-2xl font-bold tracking-tight">Uh-oh!</h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        <p className="mt-4 text-gray-600">
          Back to the{' '}
          <Link href="/" className="text-pink-600 font-bold">
            {' '}
            dashboard
          </Link>
        </p>
      </div>
    </div>
  )
}
