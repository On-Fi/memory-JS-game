document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['💋', '🩷', '🧿', '⚽️', '⭐️', '👽', '💩', '💀'];
    const cards = [...symbols, ...symbols];
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById('game-container');

    // Create card elements
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.innerHTML = symbol;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2) {
            const clickedCard = this;
            clickedCard.classList.add('flipped');
            flippedCards.push(clickedCard);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const index1 = card1.dataset.index;
        const index2 = card2.dataset.index;

        if (cards[index1] === cards[index2]) {
            // Match found
            matchedPairs++;
            if (matchedPairs === symbols.length) {
                alert('Congratulations! You matched all pairs.');
            }
        } else {
            // No match, flip the cards back
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
    }
});