import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    
    <ul className="list-none overflow-hidden bg-[#333] p-0;">
        <li className="float-left"><Link className="block text-[white] text-center no-underline px-4 py-3.5 hover:bg-[#111]" href="/">Home</Link></li>
        <li className="float-left"><Link className="block text-[white] text-center no-underline px-4 py-3.5 hover:bg-[#111]" href="/films">Films</Link></li>
        <li className="float-left"><Link className="block text-[white] text-center no-underline px-4 py-3.5 hover:bg-[#111]" href="/add">Add Film</Link></li>
    </ul>

  )
}

export default NavBar