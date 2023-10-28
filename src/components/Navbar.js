// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white font-bold text-xl">RandoStore</a>
            <a href="/" className="text-white">Home</a>
            <a href="/" className="text-white">Sell Your Item</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
            <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-4 mr-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Cart
      </a>
              
              <div className="bg-red-500 text-white p-2 rounded-full absolute  top-0 right-0">
                3 {/* This is a placeholder for the cart item count */}
              </div>
            </div>
            {/* <a href="/" className="text-white">Login</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
