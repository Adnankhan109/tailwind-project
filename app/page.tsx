"use client"


import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">MyApp</h1>

          
          <button
            className="relative w-8 h-8 flex flex-col  justify-between items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            
            <span
              className={`block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>

          
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        
        {menuOpen && (
          <nav
            className="md:hidden mt-4 flex flex-col space-y-2 bg-gray-700 p-4 rounded transition-all duration-700"
          >
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        )}
      </header>

      
      <main className="p-4 ">
        <h2 className="text-xl font-bold mb-4 text-center">" Welcome to MyApp "</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-500 p-4">Div 1</div>
          <div className="bg-green-500 p-4">Div 2</div>
          <div className="bg-red-500  p-4 md:col-span-2 lg:col-span-1">Div 3</div>
        </div>
      </main>
    </div>
  );
}
