import React, { useEffect, useMemo } from 'react';
import { getPokemons } from './api';
import Card from './components/Card';
import NavBar  from './components/NavBar';
import Loader from './components/Loader';
import Pagination from './components/Pagination';

function App() {

	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState('')

	const filteredData = useMemo(() => 
		pokemons.filter( pokemon => {
			return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
		}),
		[pokemons, search]
	)


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

	const handleSearch = (event) => {
		setSearch(event.target.value)
	}


	return (
			<div className="App">
				<NavBar />
				<div className="w-full flex justify-center">
					<div className="relative flex w-3/4 flex-wrap items-stretch mb-3">        
						<input
							onChange={handleSearch}
							type="text" 
							placeholder="Search"
							className="shadow-md px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-whit rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10" 
						/>
					</div>
				</div>
					
				{
					isLoading ? (
						<Loader />
					) 
					: (
						<>
						<div className="px-24 py-5 grid grid-cols-4">
						{
								filteredData.map( pokemon => (						
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
