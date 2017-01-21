function setDate() {
  const now = new Date();
  const tempHours = now.getHours();
  const hours = (tempHours < 10) ? `0${tempHours}` : tempHours;
  const tempMinutes = now.getMinutes();
  const minutes = (tempMinutes < 10) ? `0${tempMinutes}` : tempMinutes;
  const tempSeconds = now.getSeconds();
  const seconds = (tempSeconds < 10) ? `0${tempSeconds}` : tempSeconds;
  const text = document.querySelector('h1');
  const hexTime = `#${hours}${minutes}${seconds}`;
  text.textContent = hexTime;
  document.querySelector('body').style.background = hexTime;
}

setInterval(setDate, 1000);
