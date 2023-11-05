import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 bg-slate-300 flex flex-row items-center justify-center'>
      <div className='flex flex-row space-x-5'>
        <Link href={"/users"} className='text-lg'>
            Users
        </Link>
        <Link href={"/users/add"} className='text-lg'>
            Add
        </Link>
      </div>
    </div>
  )
}

export default Navbar
