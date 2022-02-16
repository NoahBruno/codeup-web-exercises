
const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i < 899; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
            .then((res) => res.json()))
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map((data) =>

            ({name: data.name,
            id: data.id,
            image: data.sprites.other.home.front_shiny,
            height: data.height,
            weight: data.weight,
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokemon);
        search(pokemon)
    });

};


const displayPokemon = (pokemon) => {
        const pokemonHtmlS = pokemon.map (pokeman =>

            `<div class="card-group">
<div class="card" style="width:18px;">
<img src="${pokeman.image}">
        <div class="card-body text-center">
        <h5>${pokeman.name}</h5>
        <p class="card-text">
            ${pokeman.id}<br>
            ${pokeman.height}<br>
            ${pokeman.type}<br>
        </p>
        </div>
        </div> 
</div>`)

    $("#poke").append(pokemonHtmlS)
        console.log(pokemon);

}


fetchPokemon();



// fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
//     .then((res) =>
//         res.json())
//     .then(pokemon => {
//         console.log(pokemon)
//
//             // let name= pokemons.name;
//             // let id= data.id;
//             // // image: data.sprites.other.home.front_shiny,
//             // let height= pokemons.height;
//             // let weight= pokemons.weight;
//             // let type= pokemons.types.map((type) => type.type.name).join(', ')
//         });


// function appendPoke(pokemon){
//     let myContainer= document.getElementById('#pokemon');
//     for (let i = 1; i > 300 ; i++){
//         var space = ""
//         console.log(pokemon)
//

//     }
// }


