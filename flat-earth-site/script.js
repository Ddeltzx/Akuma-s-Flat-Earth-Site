const buyTicketBtn = document.getElementById('buyTicketBtn');
const ticketMessage = document.getElementById('ticketMessage');
const rewardBox = document.getElementById('rewardBox');

const revealEntries = [
    {
        fact: 'The Moon is about 384,400 kilometers from Earth.',
        reward: 'Reward: Space Note • Lunar Distance'
    },
    {
        fact: 'A day on Venus is longer than a year on Venus.',
        reward: 'Reward: Space Note • Venus Rotation'
    },
    {
        fact: 'The Sun contains more than 99% of the solar system\'s mass.',
        reward: 'Reward: Space Note • Solar Mass'
    },
    {
        fact: 'Jupiter has a Great Red Spot, a giant storm larger than Earth.',
        reward: 'Reward: Space Note • Giant Storm'
    }
];

if (buyTicketBtn && ticketMessage && rewardBox) {
    buyTicketBtn.addEventListener('click', () => {
        buyTicketBtn.disabled = true;
        buyTicketBtn.textContent = 'Processing...';
        ticketMessage.innerHTML = 'Ticket accepted. Scanning the archive...';
        rewardBox.innerHTML = 'Awaiting transmission...';

        setTimeout(() => {
            const reveal = revealEntries[Math.floor(Math.random() * revealEntries.length)];
            ticketMessage.innerHTML = `<strong>Reveal:</strong> ${reveal.fact}`;
            rewardBox.innerHTML = `<strong>${reveal.reward}</strong>`;
            buyTicketBtn.textContent = 'Ticket Used';
        }, 900);
    });
}
