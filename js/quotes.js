const quotes = [
    {
        quote: "One must live the way one thinks or end up thinking the way one has lived.",
        author: "Paul Bourget",
    },
    {
        quote: "All that really belongs to us is time; even he who has nothing else has that.",
        author: "Baltasar Gracian",
    },
    {
        quote: "Well begun is half done.",
        author: "Aristoteles",
    },
    {
        quote: "Get a good idea and stay with it. Dog it, and stay with it until it's done right.",
        author: "Walt Disney",
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
    },
    {
        quote: "Enjoy your own life without comparing it with that of another.",
        author: "Nicolas de Condorcet",
    },
    {
        quote: "Build a dream and the dream will build you.",
        author: "Robert J. Shiller",
    },
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
    },
    {
        quote: "Travel is never a matter of money but of courage.",
        author: "Paulo Coelho",
    },

]

const htmlQuote = document.querySelector(".quotes span:first-child");
const htmlAuthor = document.querySelector(".quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

htmlQuote.innerText = randomQuote.quote;
htmlAuthor.innerText = randomQuote.author;