const socials = document.querySelector("#social");
const socialItems = socials.getElementsByTagName("a");

let keySlide = {
   transform: ['translateX(-150px)', 'translateX(0%)'],
   visibility: ["hidden", "visible"]
};
let keyOptions =  {
   duration: 1000,
   fill: "forwards",
   iterations: 1,
   easing: "cubic-bezier(0.22, 1, 0.36, 1)"
};
socialItems[2].animate(keySlide, keyOptions).finished
   .then(() => socialItems[1].animate(keySlide, keyOptions).finished)
   .then(() => socialItems[0].animate(keySlide, keyOptions).finished)
   .catch((error) => console.error(`${error}`));