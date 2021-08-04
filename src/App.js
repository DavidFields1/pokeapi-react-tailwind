import React, { useEffect, useState } from 'react';
import { getPokemons } from './api';
import Card from './components/Card';
import NavBar  from './components/NavBar';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {

	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [offset, setOffset] = useState(0);
	
	async function fetchPokemons(limit = 20){		
		const data = await getPokemons(limit, offset);			
		setPokemons(data.results)
	}
	
	useEffect(() => {		
		fetchPokemons();		
		setIsLoading(false);		
	}, [offset]);

	function handleChangePage(direction){		
		setIsLoading(true)
		if(!direction){			
			setOffset((prevOffset) => prevOffset ? prevOffset += 20 : 20)			
		} else {
			setOffset((prevOffset) => prevOffset ? prevOffset -= 20 : prevOffset)
		}
	}

	return (
			<div className="App">
				<NavBar />
				<div className="w-full flex justify-center">
					<SearchBar />
				</div>
					
				{
					isLoading ? (
						<Loader />
					) 
					: (
						<>
						<div className="px-24 py-5 grid grid-cols-4">
						{
								pokemons.map( pokemon => (						
									<Card url={pokemon.url} key={pokemon.name}/>
								))
						}		
						</div>
						<Pagination handleClick={handleChangePage} offset={offset}/>				
						</>
					)

				}		
			</div>
	);
}

export default App;
