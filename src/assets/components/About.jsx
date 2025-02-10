import React from 'react'

const About = () => {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 text-white font-semibold text-2xl">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
              DangerZone
            </span>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-yellow-400 font-medium">About</a>
            <a href="#services" className="text-white hover:text-yellow-400 font-medium">Services</a>
            <a href="#contact" className="text-white hover:text-yellow-400 font-medium">Contact</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg font-semibold transition ease-in-out duration-200">
              Sign In
            </button>
            <button className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 px-4 py-2 rounded-lg font-semibold transition ease-in-out duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default About