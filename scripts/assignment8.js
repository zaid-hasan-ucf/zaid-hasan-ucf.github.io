function getPokemon() {
    let pokemon = document.getElementById("Name").value;
    let cached = localStorage.getItem(pokemon);
    let pokemonSprite, pokemonMoves, pokemonSound;

    if (cached) {
        console.log("Data already cached..");
        let data = JSON.parse(cached);
        pokemonSprite = data.sprite;
        pokemonMoves = data.moves;
        pokemonSound = data.sound;

        document.getElementById("pokemonImage").src = pokemonSprite;
        document.getElementById("Sound").src = pokemonSound;

        document.getElementById("move1").innerHTML = "";
        document.getElementById("move2").innerHTML = "";
        document.getElementById("move3").innerHTML = "";
        document.getElementById("move4").innerHTML = "";

        let defaultOption;

        defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "-- Select --";
        document.getElementById("move1").appendChild(defaultOption);

        defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "-- Select --";
        document.getElementById("move2").appendChild(defaultOption);

        defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "-- Select --";
        document.getElementById("move3").appendChild(defaultOption);

        defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "-- Select --";
        document.getElementById("move4").appendChild(defaultOption);

        let dropdown = document.getElementById("move1");
        for (let i = 0; i < pokemonMoves.length; i++) {
            let option = document.createElement("option");
            option.value = pokemonMoves[i];
            option.text = pokemonMoves[i];
            dropdown.appendChild(option);
        }

        dropdown = document.getElementById("move2");
        for (let i = 0; i < pokemonMoves.length; i++) {
            let option = document.createElement("option");
            option.value = pokemonMoves[i];
            option.text = pokemonMoves[i];
            dropdown.appendChild(option);
        }

        dropdown = document.getElementById("move3");
        for (let i = 0; i < pokemonMoves.length; i++) {
            let option = document.createElement("option");
            option.value = pokemonMoves[i];
            option.text = pokemonMoves[i];
            dropdown.appendChild(option);
        }

        dropdown = document.getElementById("move4");
        for (let i = 0; i < pokemonMoves.length; i++) {
            let option = document.createElement("option");
            option.value = pokemonMoves[i];
            option.text = pokemonMoves[i];
            dropdown.appendChild(option);
        }

    } else {
        console.log("Data not cached.. retrieving..");
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => { 

                let moves = [];
                for (let i = 0; i < data.moves.length; i++) {
                    moves.push(data.moves[i].move.name);
                }

                let pokemonData = {
                    sprite: data.sprites.front_default,
                    moves: moves,
                    sound: data.cries.latest
                };

                localStorage.setItem(pokemon, JSON.stringify(pokemonData));

                pokemonSprite = pokemonData.sprite;
                pokemonMoves = pokemonData.moves;
                pokemonSound = pokemonData.sound;

                document.getElementById("pokemonImage").src = pokemonSprite;
                document.getElementById("Sound").src = pokemonSound;

                document.getElementById("move1").innerHTML = "";
                document.getElementById("move2").innerHTML = "";
                document.getElementById("move3").innerHTML = "";
                document.getElementById("move4").innerHTML = "";

                let defaultOption;

                defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "-- Select --";
                document.getElementById("move1").appendChild(defaultOption);

                defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "-- Select --";
                document.getElementById("move2").appendChild(defaultOption);

                defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "-- Select --";
                document.getElementById("move3").appendChild(defaultOption);

                defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "-- Select --";
                document.getElementById("move4").appendChild(defaultOption);

                let dropdown = document.getElementById("move1");
                for (let i = 0; i < pokemonMoves.length; i++) {
                    let option = document.createElement("option");
                    option.value = pokemonMoves[i];
                    option.text = pokemonMoves[i];
                    dropdown.appendChild(option);
                }

                dropdown = document.getElementById("move2");
                for (let i = 0; i < pokemonMoves.length; i++) {
                    let option = document.createElement("option");
                    option.value = pokemonMoves[i];
                    option.text = pokemonMoves[i];
                    dropdown.appendChild(option);
                }

                dropdown = document.getElementById("move3");
                for (let i = 0; i < pokemonMoves.length; i++) {
                    let option = document.createElement("option");
                    option.value = pokemonMoves[i];
                    option.text = pokemonMoves[i];
                    dropdown.appendChild(option);
                }

                dropdown = document.getElementById("move4");
                for (let i = 0; i < pokemonMoves.length; i++) {
                    let option = document.createElement("option");
                    option.value = pokemonMoves[i];
                    option.text = pokemonMoves[i];
                    dropdown.appendChild(option);
                }

            });
    }
};

function addToTeam() {
    let move1 = document.getElementById("move1").value;
    let move2 = document.getElementById("move2").value;
    let move3 = document.getElementById("move3").value;
    let move4 = document.getElementById("move4").value;
    let image = document.getElementById("pokemonImage").src;

    let newPokemon = document.createElement("span");
    newPokemon.classList.add("pokemon");

    let pokemonImage = document.createElement("img");
    pokemonImage.src = image;
    newPokemon.appendChild(pokemonImage);

    let moveList = document.createElement("ul");

    let listOne = document.createElement("li");
    listOne.textContent = move1;
    moveList.appendChild(listOne);

    let listTwo = document.createElement("li");
    listTwo.textContent = move2;
    moveList.appendChild(listTwo);

    let listThree = document.createElement("li");
    listThree.textContent = move3;
    moveList.appendChild(listThree);

    let listFour = document.createElement("li");
    listFour.textContent = move4;
    moveList.appendChild(listFour);

    newPokemon.appendChild(moveList);
    document.getElementById("pokemonList").appendChild(newPokemon);
};
