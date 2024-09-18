//DENNE BRUKER EN KNAPP - MÅTTE GJØRES ANNERLEDES

//MODEL
let enemies = ["Daleks", "Cybermen", "Weeping angels", "Sontarans", "The Silence", "The Master"]

//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="showEnemies()">Show enemies</button>
    <div id="enemyList"></div>
    `
}

//Dette la jeg i CONTROLLER, men må flyttes til VIEW da det manipulerer viewet direkte
//Vi har to variabler. Én for innerHTML i diven vi skal plassere, en annen for hver enkelt enemy
//Vi lager loop på samme måte i forrige script, men i stedet for å returnere den nye verdien, sender vi det dirkete til innerHTML'en til diven.
function showEnemies(){
    let enemyList = document.getElementById('enemyList');
    let enemy = '';
    for(let i = 0; i < enemies.length; i++){
        enemy += /*HTML*/ `
        <li>${i}. ${enemies[i]}</li>
        `
    }
    enemyList.innerHTML += enemy;
}

// console.log(`På ${i} er ${enemies[i]}`)