;
const quote= document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const api_url = 'https://dummyjson.com/quotes/random';
async function getQuote() {
    const response = await fetch(api_url);
    const data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
getQuote(api_url);
btn.addEventListener('click', getQuote);
