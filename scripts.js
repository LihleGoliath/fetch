
const pokemonList = [ ];

async function FetchData( ) {
    const  res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data =await res.json( );
    const urlList = data.results;

    urlList.forEach(async (pokemonUrl) =>{
        const res = await fetch(pokemonUrl.url);
        const pokemons = await res.json( );
        pokemonList.push(pokemons);
        displayPokemon(pokemonList);
    });
};
FetchData( );

// function displayPokemon(pokemonArray) {
//     document.querySelector('#pokemonList').innerHTML = "";
//     pokemonArray.forEach((pokemon)=>{
//         document.querySelector('#pokemonList').innerHtml += `
//         <img src=${pokemon.sprites.front_default} alt="Front" />
//         `;
//     }); 
    
// };

function displayPokemon(pokemonArray) {
    document.querySelector('#pokemonList').innerHTML = "";
    pokemonArray.forEach((pokemon)=> {
      document.querySelector("#pokemonList").innerHTML += `  
      <div class="container">
      <img src=${pokemon.sprites.front_default} alt="Front">
      <p>${pokemon.name}</p>      
      </div>      
      `;
    });
  }


