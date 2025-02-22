const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
function showTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  sec.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;
  const mins = date.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  min.style.transform = `translate(-50%, -100%) rotate(${minsDegrees}deg)`;
  const hours = date.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30;
  hour.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
}
setInterval(showTime, 1000);
showTime();
