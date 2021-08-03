import React from 'react'

const NavBar = () => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div className="bg-red-500 p-4 mb-5 flex justify-center">
            <div>
                <img src={imgUrl} alt="logo" className="w-40 cursor-pointer"/>
            </div>
        </div>
    )
}

export default NavBar
