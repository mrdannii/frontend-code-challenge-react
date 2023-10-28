import React from 'react'

export default function Productcard(props) {
  let {name, price, img}=props;
  // let name= props.name;
  return (
    <>
    <div class="p-10 mt-0 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
  <img class="h-40 w-full object-cover object-center" src={img} alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900"> {name}</h2>
    {/* <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p> */}
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs {price}/-</p>
      {/* <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p> */}
      {/* <p class="ml-auto text-base font-medium text-green-500">20% off</p> */}
    </div>
  </div>
  <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-0 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart
      </a>
</div>
</>
  )
}
