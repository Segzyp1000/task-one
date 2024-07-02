const currentTime = document.getElementById("currentTime");
const currentDay = document.getElementById("currentDay");
const slackEmail = document.getElementById("slackEmail");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(() => {
	const now = new Date();
	const utcTime = new Date(now.getTime() + (60 * 60 * 1000)); // adjust for GMT+1
	const utcTimeString = utcTime.toUTCString();
	currentTime.innerText = utcTimeString.slice(17, 25); // extract the time part
	currentDay.innerText = days[now.getDay()]; // update the current day of the week
}, 1000); // update every second

slackEmail.innerText = 'segunolowoyeye@gmail.com'