const currentDate = new Date();

// Get the local time components
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
let ampm = "AM";

if (hours > 12) {
  hours -= 12;
  ampm = "PM";
}

// Format the time as a string
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Log or use the formatted time
console.log("Current Local Time:", formattedTime);

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const indicator = document.querySelector("#ampm");
hour.innerHTML = hours;
minute.innerHTML = minutes;
second.innerHTML = seconds;
indicator.innerHTML = ampm;
// hour.style.textAlign = "center";
