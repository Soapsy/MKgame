

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
var matchEnded = 0;

//создаем объекты игроков
const player1 = {
    player: 1,
    name: 'Boka',
    hp: 80,
    img: './assets/scorpion.gif',
    weapon: ['gun', 'rocket_launcher'],
    fight: function () {
        console.log(concat(this.name, 'Fight!'))
    }
};

const player2 = {
    player: 2,
    name: 'Joka',
    hp: 100,
    img: './assets/subzero.gif',
    weapon: ['chair', 'knife'],
    fight: function () {
        console.log(concat(this.name, 'Fight!'))
    }
};


//функция для создания элементов с классами
function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}


//tasks #1,2,3 функция создания игроков, принимающая в себя название игрока и объект

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);

    const $progressBar = createElement('div', 'progressbar');

    const $character = createElement('div', 'character');

    const $life = createElement('div', 'life');
    $life.style.width = playerObj.hp + '%';

    const $name = createElement('div', playerObj.name);
    $name.innerText = playerObj.name;

    const $img = createElement('img');
    $img.src = playerObj.img;

    $player.appendChild($progressBar);
    $player.appendChild($character);

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img);

    return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


 // генерируем рандомный урон
function generateDamage()
{
	var damage = Math.floor(Math.random() * 20 ) + 1;
	return damage;
}

//изменение ХП

function changeHp(player)
{
    const $playerLife = document.querySelector('.player'+player.player+' .life');

    player.hp = player.hp - generateDamage(); // генерируем рандомный урон

    if(player.hp <=0 && matchEnded == 0) // проверка на отрицательное или нулевое ХП
    {
        player.hp=0;
        $arenas.appendChild(playerLose(player.name));
        $randomButton.disabled = true; // выключаем кнопку после поражения
		matchEnded = 1;
    }
	
    $playerLife.style.width = player.hp + '%';
 
}


// Отображение проигравшего
function playerLose(name)
{
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name+' lose!';

    return $loseTitle;
}

// обработка нажатий на кнопку
$randomButton.addEventListener('click', function() {
    changeHp(player1);
    changeHp(player2);
});


