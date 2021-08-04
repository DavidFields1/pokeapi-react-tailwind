import React, { useEffect, useState } from 'react';
import { getPokemon } from '../api';

const Card = (url) => {

    const [pokemon, setPokemon] = useState({});        
	
	async function fetchPokemon(){
		const data = await getPokemon(url);        
		setPokemon(data);             
	}

	useEffect(() => {                
		fetchPokemon();                
	}, [])

    return (
        <div className="">
            <div className="w-72 border border-black m-4 rounded-md overflow-hidden hover:shadow-2xl">                                
                <div className="bg-red-500 p-2 m-0 flex items-center border-b border-black">
                    <div className="rounded-full bg-black text-white w-7 h-7 text-sm flex justify-center items-center"> {pokemon.id} </div>
                    <h2 className="font-bold text-xl ml-2 "> {pokemon.name ? pokemon.name.toUpperCase() : ""} </h2>
                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <img className="w-full" src={pokemon.sprites ? pokemon.sprites.front_default : ""} alt="bulbasaur"/>
                        <div className="w-full flex justify-evenly text-xs text-center m-0">
                            {
                                pokemon.types ? pokemon.types.map( ({type}) => {                                                                         
                                    return <p key={type.url} className={`w-12 text-white rounded-full bg-gray-700`}>{type.name}</p> 
                                }) 
                                : ""
                            }                        
                        </div>
                    </div>
                    <div className="w-1/2 h-full pb-4 bg-blue-400 text-center">
                        <div>
                            <p className="w-full bg-blue-900 text-white font-semibold">Dimensions</p>
                            <div>
                                <p className="mb-0.5"> Weight: {pokemon.weight}</p>                
                                <p className="mb-0.5"> Height: {pokemon.height}</p>
                            </div>
                        </div>
                        <div className="w-full h-16 mt-3">
                            <p className="w-full bg-blue-900 text-white font-semibold">Abilities</p>
                            <div>
                                {
                                    pokemon.abilities ? pokemon.abilities.map( ({ability}) => (
                                        <p key={ability.url} className="mb-0.5">{ability.name}</p>
                                    ))
                                    : ""
                                }                            
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Card
