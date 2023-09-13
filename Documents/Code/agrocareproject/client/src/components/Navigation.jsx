import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
      <Link to="/crops">
        <h1 className='font-bold text-3xl mb-4'>AgroCare</h1>
      </Link>
     <button className='bg-indigo-300 px-3 py-2 rounded-lg'>
        <Link to="/crops-create">Create crop</Link>
     </button>
    </div>
  )
}
