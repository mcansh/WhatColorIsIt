window.onload = function fade() {
  document.querySelector('body').style.opacity = 1;
};

function setDate() {
  // get current datetime
  const now = new Date();
  // grab the hours
  const tempHours = now.getHours();
  // if hours < 10, append '0'
  const hours = tempHours < 10 ? `0${tempHours}` : tempHours;
  // if you select '12 hour time'
  // const imperialHours = (tempHours > 12) ? `${tempHours - 12}` : tempHours;
  // grab the minutes
  const tempMinutes = now.getMinutes();
  // if minutes < 10, append '0'
  const minutes = tempMinutes < 10 ? `0${tempMinutes}` : tempMinutes;
  // grab the seconds
  const tempSeconds = now.getSeconds();
  // if seconds < 10, append '0'
  const seconds = tempSeconds < 10 ? `0${tempSeconds}` : tempSeconds;

  const hexElement = document.querySelector('#hex');
  const timeElement = document.querySelector('#time');
  const hexTime = `#${hours}${minutes}${seconds}`;
  const time = `${hours}:${minutes}:${seconds}`;
  hexElement.textContent = hexTime;
  timeElement.textContent = time;
  document.querySelector('body').style.background = hexTime;
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute('content', hexTime);
  document
    .querySelector('link[rel="mask-icon"]')
    .setAttribute('color', hexTime);
}

setInterval(setDate, 1000);
