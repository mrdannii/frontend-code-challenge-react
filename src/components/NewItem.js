import React from 'react'

export default function NewItem() {
  return (
    <>
        
<form>
  <div class="mb-4">
    <label for="name" class="block mb-2 text-sm font-medium text-blue-900 ">Item Name</label>
    <input type="name" id="name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="" required/>
  </div>
  <div class="mb-4">
    <label for="price" class="block mb-2 text-sm font-medium text-blue-900 ">Item Price</label>
    <input type="price" id="price" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="" required/>
  </div>
  <div class="mb-4">
    <label for="url" class="block mb-2 text-sm font-medium text-blue-900 ">Item Image Url</label>
    <input type="url" id="url" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="" required/>
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  )
}
