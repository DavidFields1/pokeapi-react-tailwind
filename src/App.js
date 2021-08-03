import React, { useEffect, useState } from 'react';
import { getPokemons } from './api';
import Card from './components/Card';
import NavBar  from './components/NavBar';
// import Loader from './components/Loader';
import LoadingCard from './components/LoadingCard';
import SearchBar from './components/SearchBar';

function App() {

	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	async function fetchPokemons(){
		const data = await getPokemons();
		setPokemons(data.results)
	}
	
	useEffect(() => {		

		fetchPokemons();		
		setIsLoading(false)		
	}, [0])

	return (
			<div className="App">
				<NavBar />
				<div className="w-full flex justify-center">
					<SearchBar />
				</div>
					
				{
					isLoading ? (
						<div className="px-24 py-5 grid grid-cols-4">
						{
								pokemons.map( pokemon => (						
									<LoadingCard />
								))
						}		
						</div>
					) 
					: (
						<div className="px-24 py-5 grid grid-cols-4">
						{
								pokemons.map( pokemon => (						
									<Card url={pokemon.url} key={pokemon.name}/>
								))
						}		
						</div>
					)

				}						
			</div>
	);
}

export default App;
