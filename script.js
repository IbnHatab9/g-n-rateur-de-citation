const quotes = [
    "La vie est 10% ce qui vous arrive et 90% comment vous y réagissez. – Charles R. Swindoll",
    "Le succès est la somme de petits efforts, répétés jour après jour. – Robert Collier",
    "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu'un d'autre. – Steve Jobs",
    "Ne laissez pas le bruit des opinions des autres étouffer votre voix intérieure. – Steve Jobs",
    "La meilleure façon de prédire l'avenir est de l'inventer. – Alan Kay"
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});