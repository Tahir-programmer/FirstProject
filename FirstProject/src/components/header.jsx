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
<<<<<<< HEAD
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#projects" className="hover:underline">Free</a></li>
=======
                <li><a href="#projects" className="hover:underline">Help</a></li>
>>>>>>> ee78125b871f1ef7ce4e4b9eed3a79087d6e5994
            </ul>
        </nav>      
        </header>
        <div>
            <h2 className="text-xl font-semibold mt-4">Welcome to My Project</h2>
            <p className="mt-2">This is a simple React project to demonstrate basic components and styling.</p>
        </div>

    </div>
  )
}

export default header