const q = document.querySelector("blockquote q");
const author = document.querySelector("#author");
const quotes = [
   {
      phrase:"Uma nova ideia surge repentinamente e de forma mais intuitiva, mas a intuição nada mais é do que o resultado de experiências intelectuais anteriores.",
      author: "Albert Einstein"
   },
   {
      phrase:"Um dia, as senhoras levarão seus computadores para passear no parque e dirão umas às outras: 'Meu computadorzinho disse uma coisa tão engraçada esta manhã!'.",
      author: "Alan Turing"
   },
   {
      phrase:"A matemática tem algo em comum com a poesia. É feito de relações reais, passos reais, deduções reais, por isso tem essa beleza.",
      author: "Richard Stallman"
   },
   {
      phrase:"Com olhos suficientes, todos os bugs são superficiais.",
      author: "Eric Raymond"
   },
   {
      phrase:"A política é para o presente, mas uma equação é para a eternidade.",
      author: "Albert Einstein"
   },
   {
      phrase:"O melhor tipo de homem se entrega a descobrir o significado e o propósito da própria vida... esse é o homem que eu chamo de filósofo.",
      author: "Pitágoras"
   },
   {
      phrase:"Os buracos negros são onde Deus divide por zero.",
      author: "Steven Wright"
   },
   {
      phrase:"Quando os pensamentos se tornam vazios, o infinito é tudo o que enxergamos.",
      author: "Henrik Rodrigues"
   },
   {
      phrase:"Quanto mais subimos, menores parecemos aos olhos de quem não sabe voar.",
      author: "Friedrich Nietzsche"
   },
   {
      phrase:"O sucesso leva à complacência. A complacência leva ao fracasso. Só os paranóicos sobrevivem.",
      author: "Andy Grove"
   },
   {
      phrase:"Os olhos do espírito só começam a ser penetrantes quando os do corpo começam a enfraquecer.",
      author: "Platão"
   },
   {
      phrase:"A partir de certo ponto, o dinheiro deixa de ser o objetivo. O interessante é o jogo.",
      author: "Aristóteles Onassis"
   },
   {
      phrase:"Tempo triste! É mais fácil desintegrar um átomo do que um preconceito.",
      author: "Albert Einstein"
   },
   {
      phrase:"O sábio nunca diz tudo o que pensa, mas sempre pensa tudo o que diz.",
      author: "Aristóteles"
   },
   {
      phrase:"Aja antes de falar e, portanto, fale de acordo com suas ações.",
      author: "Confúcio"
   },
   {
      phrase:"O inimigo mais perigoso que você encontrará sempre será você mesmo.",
      author: "Friedrich Nietzsche"
   },
   {
      phrase:"O primeiro dever da inteligência é duvidar de si mesma.",
      author: "Albert Einstein"
   },
   {
      phrase:"Conquistar não é suficiente. Você tem que saber como seduzir.",
      author: "Voltaire"
   },
   {
      phrase:"O silêncio é um amigo que nunca trai.",
      author: "Confúcio"
   },
   {
      phrase:"Ouça e você será sábio. O começo da sabedoria é o silêncio.",
      author: "Pitágoras"
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