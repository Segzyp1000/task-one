const currentTime = document.getElementById("currentTime");
const currentDay = document.getElementById("currentDay");
const slackEmail = document.getElementById("slackEmail");


setInterval(() => {
  const now = new Date();
  const utcTime = now.toUTCString();
  currentTime.innerText = utcTime;
}, 1000);


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const today = new Date();
const dayIndex = today.getDay();
currentDay.innerText = days[dayIndex];


slackEmail.innerText = "segunolowoyeye@gmail.com";


