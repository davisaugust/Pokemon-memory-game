const grid = document.querySelector('.game');

const characters = [
    'charizard' ,
    'umbreon' ,
    'snorlax1' ,
    'blastoise',
    'lucario',
    'mewtwo',
    'Venusaur2',
    'zapdos',
];

const createElement = (tag, className) => {
    const element = document.creteElement(tag);
    element.className = className;
    return element;
}


const createCard = () => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face card_front')
    const back = createElement('div', 'face card_back')


    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    
    characters.forEach((character) => {

        const card = createCard();
        grid.appendChild(card);

    });

}

loadGame();