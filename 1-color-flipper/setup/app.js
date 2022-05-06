const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
  
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);// para obtener los numeros 1 - 3 multiplico el 0.x * el tamaño del objeto
}
