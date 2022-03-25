const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/missing.png")
            pokeInfo("Pokemon no encontrado :(");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let nombre = 'Nombre: '+data.name+'\n';
            var tipos = 'Tipos: \n';
            var stats = 'Estadísticas: \n';
            var moves = 'Movimientos: \n';

            for (let i = 0; i < data.types.length; i++) {
                tipos += ' -'+data.types[i].type.name+'\n';
            }

            for (let i = 0; i < data.stats.length; i++) {
                stats += ' -'+data.stats[i].stat.name+' = '+data.stats[i].base_stat+'\n';
            }

            for (let i = 0; i < data.moves.length; i++) {
                moves += ' -'+data.moves[i].move.name+'\n';
            }
            
            let inf = nombre+tipos+stats+moves;
            pokeImage(pokeImg);
            pokeInfo(inf)
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeInfo = (info) => {
    const infoPok = document.getElementById("info");
    infoPok.innerHTML = info;
}