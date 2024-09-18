//DENNE VISER LISTEN MED ÉN GANG

//Lag et array
//Bruk en loop for å vise frem ett og ett element


//MODEL

let enemies = ["Daleks", "Cybermen", "Weeping angels", "Sontarans", "The Silence", "The Master"]

//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>${showEnemies()}</div>
    `
}

//CONTROLLER

//Starter med å lage en variabel for en enkelt enemy
//I loopen starer indexen på 0 og teller opp hele lengden til arrayet vårt
//Deretter lister vi opp hvert enkelt objekt (via enemy variablen)
//Det legges i en liste og vi inkluderer hvor i indexen objektet er + objektet som er på den indexen
//Til slutt returnerer vi den nye verdiene til enemy
function showEnemies(){
    let enemy = '';
    for(let i = 0; i < enemies.length; i++){
        enemy += /*HTML*/ `
        <li>${i} is ${enemies[i]}</li>
        `
    }
    return enemy;
}

// console.log(`På ${i} er ${enemies[i]}`)