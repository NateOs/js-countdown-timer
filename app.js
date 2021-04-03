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

let futureDate = new Date(2021, 4, 03 , 11, 30, 0)

//* setting statics
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]

let day = futureDate.getDay()
day = weekdays[day]

let date = futureDate.getDate()

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year},  at ${hours}: ${minutes} GMT`

//* future time in ms
const futureTime = futureDate.getTime()

const getRemainingTime = () => {
  const today = new Date().getTime()
  const t = futureTime - today
  console.log(t);

  //* 1s = 1000ms
  //* 1m = 60s
  //* 1H = 60m
  //* 1D = 24H

  //* values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60* 60 * 1000
  const oneMinute = 60 * 1000

  //* calc all values
  let days = t / oneDay
    days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  //* set values array

  const values = [days, hours, minutes, seconds]

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  } 
  
  timeItems.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

}

//* call getRemainingTime func every sec
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
