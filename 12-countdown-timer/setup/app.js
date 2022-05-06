const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2021,7,24,6,30,0); valores puestos a mano

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} am`; //el `` es con alt + 96

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour; //Esto sirve para calcular la cantidad de horas que quedan dentro de ese dia, ej 8%3, 3 solo pueden entrar 2 veces en el 8
  hours = Math.floor(hours);
  let minutes = Math.floor ((t % oneHour) / oneMinute); // es lo mismo que las dos lineas de arriba
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expired"> sorry, this giveaway has expired.</h4>`
  }

}

let countdown = setInterval(getRemainingTime, 1000);// conteo en vivo

getRemainingTime();