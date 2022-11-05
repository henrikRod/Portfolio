const q = document.querySelector("blockquote q");
const author = document.querySelector("#author");
const quotes = [
   {
      phrase:"A new idea appears suddenly and in a more intuitive way, but intuition is nothing more than the result of previous intellectual experiences.",
      author: "Albert Einstein"
   },
   {
      phrase:"One day, ladies will take their computers for a walk in the park and say to each other, 'My little computer said such a funny thing this morning!'.",
      author: "Alan Turing"
   },
   {
      phrase:"Mathematics has something in common with poetry. It's made of real relations, real steps, real deductions, that's why it has this beauty.",
      author: "Richard Stallman"
   },
   {
      phrase:"With enough eyes, all bugs are superficial.",
      author: "Eric Raymond"
   },
   {
      phrase:"Politics is for the present, but an equation is for eternity.",
      author: "Albert Einstein"
   },
   {
      phrase:"The finest type of man gives himself up to discovering the meaning and purpose of life itself... this is the man i call a philosopher.",
      author: "Pythagoras"
   },
   {
      phrase:"Black holes are where God divided by zero.",
      author: "Steven Wright"
   },
   {
      phrase:"When thoughts become empty, infinity is all we see.",
      author: "Henrik Rodrigues"
   },
   {
      phrase:"The higher we rise, the smaller we seem in the eyes of those who don't know how to fly.",
      author: "Friedrich Nietzsche"
   },
   {
      phrase:"Success breeds complacency. Complacency breeds failure. Only the paranoid survive.",
      author: "Andy Grove"
   },
   {
      phrase:"The eyes of the spirit only begin to be penetrating when those of the body begin to weaken.",
      author: "Plato"
   },
   {
      phrase:"After a certain point, money is no longer the objective. The interesting is the game.",
      author: "Aristotle Onassis"
   },
   {
      phrase:"Sad time! It is easier to disintegrate an atom than a prejudice.",
      author: "Albert Einstein"
   },
   {
      phrase:"The wise man never says everything he thinks, but always thinks everything he says.",
      author: "Aristotle"
   },
   {
      phrase:"Act before you speak and therefore speak according to your actions.",
      author: "Confucius"
   },
   {
      phrase:"The most dangerous enemy you will ever encounter will always be yourself.",
      author: "Friedrich Nietzsche"
   },
   {
      phrase:"The first duty of intelligence is to doubt itself.",
      author: "Albert Einstein"
   },
   {
      phrase:"Conquering is not enough. You have to know how to seduce.",
      author: "Voltaire"
   },
   {
      phrase:"Silence is a friend that never betrays.",
      author: "Confucius"
   },
   {
      phrase:"Listen and you will be wise. The beginning of wisdow is the silence.",
      author: "Pythagoras"
   }
];
const quoteOpac = {
   opacity: [0, 1, 1, 0]
};
const quoteOptions = {
   duration: 10000,
   iterations: 1,
   easing: "linear"
};
function changeQuote() {
   for(let i = 0; i < quotes.length ; i++) {
      setTimeout(() => {
         q.animate(quoteOpac, quoteOptions);
         q.textContent = quotes[i].phrase;

         author.animate(quoteOpac, quoteOptions);
         author.textContent = quotes[i].author;
      }, i * 10000);
   };
};
changeQuote();
setInterval(changeQuote, 1000 * quotes.length * 10);