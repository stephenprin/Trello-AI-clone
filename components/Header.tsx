import React from 'react'

const Header = () => {
  return (
    <header>
        <h2 className='text-cyan-800 text-[2rem] font-bold pb-10 md:pb-0 '>Trello</h2>
    <div>
        <form>
          <input type="text" placeholder="Search" className='bg-gray-500 outline-none rounded-md p-2' />
          <button className='bg-cyan-800 text-white rounded-md p-2'>Search</button>
        </form>
    </div>
  </header>
  )
}

export default Header
