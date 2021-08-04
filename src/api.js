export const getPokemons = async (limit = 20, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();        
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getPokemon = async ({url}) => {
    // console.log(`get pokemon url: ${url}`);
    try {        
        const response = await fetch(url);
        // console.log("fetch done");
        const data = await response.json()
        // .then((data) => {
        //     console.log(data);
        //     return data;
        // })       
        return data; 
    } catch (err) {
        console.log(err);
    }
}