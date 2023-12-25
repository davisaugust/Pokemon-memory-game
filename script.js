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

const checkEndgame = () =>{
    const disabledCards = document.querySelectorAll('.disabled_card');

    setTimeout(() => {
        if (disabledCards.length === 16){
            alert('Congratulations, you did it!')
        }
    }, 200);
    
}

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){
    
        firstCard.firstChild.classList.add('disabled_card');
        secondCard.firstChild.classList.add('disabled_card');

        firstCard = '';
        secondCard = '';

        checkEndgame();

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal_card');
            secondCard.classList.remove('reveal_card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal_card')){
        return;
    }

    if (firstCard === ''){

        target.parentNode.classList.add('reveal_card');
        firstCard = target.parentNode;

    } else if (secondCard === ''){

        target.parentNode.classList.add('reveal_card');
        secondCard = target.parentNode;

        checkCards();
    }

}
const createCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face card_front')
    const back = createElement('div', 'face card_back')

    front.style.backgroundImage = `url('/images/${character}.jpeg')`;

    card.appendChild(front);
    card.appendChild(back); 

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

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