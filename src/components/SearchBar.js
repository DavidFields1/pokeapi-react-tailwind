import React from 'react'

const SearchBar = () => {
    return (
        <div class="relative flex w-3/4 flex-wrap items-stretch mb-3">
        <span
            class="z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-4">
            <i class="fas fa-search"></i>
        </span>
        <input type="text" placeholder="Search"
            class="px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-whit rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10" />
        </div>
    )
}

export default SearchBar
