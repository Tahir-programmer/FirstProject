import React from 'react'

function header() {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My First React Project</h1>
        <nav className="mt-2">
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li><a href="#blog" className="hover:underline">Blog</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
            </ul>
        </nav>      
        </header>

    </div>
  )
}

export default header