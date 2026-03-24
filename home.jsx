import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#dff6f5] to-[#b2e8e5]">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex items-center justify-center">
            🧠
          </div>
          <h1 className="text-xl font-semibold text-gray-700">
            Calmscious
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="text-teal-500 cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Mental Health Test</li>
          <li className="cursor-pointer">Blogs</li>
        </ul>

        {/* Login Button */}
        <button className="bg-teal-400 text-white px-5 py-2 rounded-full hover:bg-teal-500 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-5">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Find Relief, Regain Balance, <br />
          and Feel in Control
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Get the peace of mind you deserve—start today!
        </p>

        <button className="mt-8 bg-teal-400 text-white px-6 py-3 rounded-full text-lg hover:bg-teal-500 transition">
          Book a session
        </button>
      </div>
    </div>
  );
};

export default Home;