const grid = document.querySelector('.game');

const characters = [
    'Charizard' ,
    'umbreon' ,
    'snorlax1' ,
    'Blastoise',
    'lucario',
    'mewtwo',
    'Venusaur',
    'zapdos',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal_card')){
        return;
    }

    if (firstCard === ''){

        target.parentNode.classList.add('reveal_card');

    } else if (secondCard === ''){

        target.parentNode.classList('reveal_card')
        secondCard = target.parentNode;
    }

    target.parentNode.classList.add('reveal_card');
}
const createCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face card_front')
    const back = createElement('div', 'face card_back')

    front.style.backgroundImage = `url('/images/${character}.jpeg')`;

    card.appendChild(front);
    card.appendChild(back); 

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });

}

loadGame();