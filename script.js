const quotes = [

{
text:"The future depends on what you do today.",
author:"Mahatma Gandhi"
},

{
text:"Success is not final, failure is not fatal. It is the courage to continue that counts.",
author:"Winston Churchill"
},

{
text:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
text:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},

{
text:"Do one thing every day that scares you.",
author:"Eleanor Roosevelt"
},

{
text:"Don't watch the clock; do what it does. Keep going.",
author:"Sam Levenson"
},

{
text:"Stay hungry. Stay foolish.",
author:"Steve Jobs"
},

{
text:"Everything you can imagine is real.",
author:"Pablo Picasso"
},

{
text:"Be yourself; everyone else is already taken.",
author:"Oscar Wilde"
},

{
text:"Success usually comes to those who are too busy to be looking for it.",
author:"Henry David Thoreau"
}

];

const quote = document.getElementById("quote");
const author = document.getElementById("author");

function generateQuote(){

const random = Math.floor(Math.random()*quotes.length);

quote.textContent = `"${quotes[random].text}"`;

author.textContent = "- " + quotes[random].author;

}

document.getElementById("newQuote").addEventListener("click",generateQuote);

document.getElementById("copyQuote").addEventListener("click",()=>{

navigator.clipboard.writeText(
quote.textContent + "\n" + author.textContent
);

alert("Quote copied!");

});

document.getElementById("shareQuote").addEventListener("click",()=>{

const text = encodeURIComponent(
quote.textContent + " " + author.textContent
);

window.open(
"https://twitter.com/intent/tweet?text="+text,
"_blank"
);

});

generateQuote();