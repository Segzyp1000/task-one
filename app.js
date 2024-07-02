const currentTime = document.getElementById("currentTime");
const currentDay = document.getElementById("currentDay");
const slackEmail = document.getElementById("slackEmail");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(() => {
	const now = new Date();
	const utcTime = new Date(now.getTime() + (60 * 60 * 1000));
	const utcTimeString = utcTime.toUTCString();
	currentTime.innerText = utcTimeString.slice(17, 25);
	currentDay.innerText = days[now.getDay()]; 
}, 1000); 

slackEmail.innerText = 'segunolowoyeye@gmail.com'