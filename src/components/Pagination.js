import React from 'react'

const Pagination = ({handleClick, offset}) => {

    function nextPage(){
        handleClick(1)
    }
    function prevPage(){
        handleClick(0)
    }

    const page = (offset + 20)/20

    return (
        <div className="w-full flex justify-center mb-8">
            <div>
                <button className="block bg-yellow-400 p-2 w-24 mr-2" onClick={nextPage}>Previous</button>
            </div>
            <div>
                <h2 className="text-center text-3xl">{page}</h2>
            </div>
            <div>
                <button className="block bg-yellow-400 p-2 w-24 ml-2" onClick={prevPage} >Next</button>
            </div>
        </div>
    )
}

export default Pagination
