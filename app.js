const colors = [
  "green",
  "red",
  "rgba(133,122,200, 0.5)",
  "#00FFFF",
  "#65f814",
  "#5d3ceb",
];

//Selectors
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Event Listeners
btn.addEventListener("click", function () {
  //Get random number between 0 - 3
  const randomNumber = Math.floor(Math.random() * Math.floor(4));
  document.body.style.backgroundColor = colors[randomNumber];
  color.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
