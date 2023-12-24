document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['💋', '🌙', '🌷', '🧿', '🖤', '💩', '☠️', '🦈', '🐲', '🧸'];
    const cards = [...symbols, ...symbols];
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById('game-container');
    const restartButton = document.getElementById('restart-button');

    // Create card elements
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = '?'; // Initial state, showing a question mark

        const back = document.createElement('div');
        back.classList.add('back');
        back.innerHTML = symbol;

        cardInner.appendChild(front);
        cardInner.appendChild(back);

        card.appendChild(cardInner);

        card.addEventListener('click', () => flipCard(card));
        gameContainer.appendChild(card);
    });

    restartButton.addEventListener('click', restartGame);

    function flipCard(clickedCard) {
        if (!clickedCard.classList.contains('flipped') && flippedCards.length < 2) {
            // Flip the card
            clickedCard.classList.add('flipped');

            flippedCards.push(clickedCard);

            if (flippedCards.length === 2) {
                setTimeout(() => checkMatch(), 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.back').innerHTML;
        const symbol2 = card2.querySelector('.back').innerHTML;

        if (symbol1 === symbol2) {
            // Match found
            matchedPairs++;
            if (matchedPairs === symbols.length) {
                alert('Glückwunsch');
            }
        } else {
            // No match, flip the cards back
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        // Clear the flipped cards array
        flippedCards = [];
    }

    function restartGame() {
        // Reset variables
        flippedCards = [];
        matchedPairs = 0;

        // Clear the game container
        gameContainer.innerHTML = '';

        // Shuffle the cards
        cards.sort(() => Math.random() - 0.5);

        // Create and append card elements
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');

            const front = document.createElement('div');
            front.classList.add('front');
            front.innerHTML = '?'; // Initial state, showing a question mark

            const back = document.createElement('div');
            back.classList.add('back');
            back.innerHTML = symbol;

            cardInner.appendChild(front);
            cardInner.appendChild(back);

            card.appendChild(cardInner);

            card.addEventListener('click', () => flipCard(card));
            gameContainer.appendChild(card);
        });
    }
});
