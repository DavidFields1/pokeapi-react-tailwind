import React from 'react'

const SearchBar = () => {
    return (
        <div className="relative flex w-3/4 flex-wrap items-stretch mb-3">        
            <input 
                type="text" 
                placeholder="Search"
                className="shadow-md px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-whit rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10" 
            />
        </div>
    )
}

export default SearchBar
