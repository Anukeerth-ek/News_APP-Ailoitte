import React from 'react'
import { UserCircle2 } from 'lucide-react';
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <h1 className="text-2xl font-bold text-red-600">Buletin</h1>
      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="#">Stories</Link>
        <Link href="#">Creator</Link>
        <Link href="#">Community</Link>
        <Link href="#">Subscribe</Link>
      </nav>
      <div className="flex gap-4 items-center">
        <button className="text-sm text-gray-700 hover:text-black">Write</button>
        <UserCircle2 className="w-6 h-6 text-gray-700" />
      </div>
    </header>
  )
}

export default Header