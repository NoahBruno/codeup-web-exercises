// const fetchPokemon = () => {
//     const promises = [];
//     for (let i = 1; i < 300; i++) {
//         let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url)
//             .then((res) => res.json()));
//     }
//
//
//     Promise.all(promises).then(results => {
//         const pokemon = results.map((data) =>
//
//             ({name: data.name,
//             id: data.id,
//             // image: data.sprites.other.home.front_shiny,
//             height: data.height,
//             weight: data.weight,
//             type: data.types.map((type) => type.type.name).join(', ')
//         }));
//         displayPoke(pokemon)
//     });
//
// };
//
//
// const displayPoke = (pokemon) => {
//
//     const pokemonHtml = pokemon.map ( pokemon =>
//         `<div class="card h-100">
//     <div class="card-body text-center">
//         <h5>${name}</h5>
//         <p class="card-text">
//             ${id}<br>
//             ${height}<br>
//             ${type}<br>
//         </p>
//         </div>
//     </div> `)
//
//     $('#pokemon').innerHTML = pokemonHtml;
// }
//
// fetchPokemon();

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) =>
        res.json())
    .then(pokemon => {
        console.log(pokemon)
        pokemon.forEach(pokemons =>
            let name= pokemons.name;
            let id= data.id;
            // image: data.sprites.other.home.front_shiny,
            let height= pokemons.height;
            let weight= pokemons.weight;
            let type= pokemons.types.map((type) => type.type.name).join(', ')
        })
    })


