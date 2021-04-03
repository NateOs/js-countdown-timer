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

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const timeItems = document.querySelectorAll('.deadline h4')

let futureDate = new Date(2021, 4, 24, 11, 30, 0)
console.log(futureDate);

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]

let day = futureDate.getDay()
day = weekdays[day]

let date = futureDate.getDate()



giveaway.textContent = `giveaway ends on ${day}, ${date}th ${month} ${year},  at ${hours}: ${minutes} GMT`


