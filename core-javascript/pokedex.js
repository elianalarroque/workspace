window.onload = fulfillSelector;



async function showCry(cryUrl) {
    let beat = new Audio(cryUrl);
    beat.play();
}


async function showPokemon() {
    // let pokemonName = document.getElementById("pokemonText");

    let pokemonName = document.getElementById("pokemonSelector");

    let pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.value);
    if (pokemonResponse.status == 404) {
        alert("Este pokemon no existe!!!");
    }
    else {
        let pokemonData = await pokemonResponse.json();
        frontDefaultUrl = pokemonData.sprites.front_default;

        pokedexCanva = document.getElementById("pokemonImage");
        pokedexCanva.src = frontDefaultUrl;
        console.log("pokemon data", pokemonData);

        let pokemonCries = document.getElementById("pokemonCries");
        pokemonCries.innerHTML = `<button type="button" onclick="showCry(\'${pokemonData.cries.latest}\')">Cry</button>`
    }
}


async function fulfillSelector() {
    let pokemonSelector = document.getElementById("pokemonSelector");
    let listPokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    let listPokemon = await listPokemonsResponse.json();
    let selectorText = "";
    for (let index = 0; index < listPokemon.results.length; index++) {
        selectorText += `<option>${listPokemon.results[index].name}</option>`;
    }
    pokemonSelector.innerHTML = selectorText;
}



// imagen de pokemon no existe cuando el name no existe.