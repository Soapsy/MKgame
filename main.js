
const player1 = {
    name: 'Boka',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun','rocket_launcher'],
    fight: function() {
        console.log(concat(this.name, 'Fight!'))
    }
};

const player2 = {
    name: 'Joka',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['chair','knife'],
    fight: function() {
        console.log(concat(this.name, 'Fight!'))
    }
};



function createPlayer(player, playername, life)
{
    const $player= document.createElement('div');
    $player.classList.add(player);

    const $progressBar= document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add(life);
    $life.style.width = player.hp+'%';

    const $name = document.createElement('div');
    $name.classList.add(playername);
    $name.innerText=player;

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

}

createPlayer('player1', 'Vovan', 100);
createPlayer('player2', 'AntiVovan', 90);