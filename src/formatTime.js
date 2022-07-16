export const formatTime = (time = 0) => {
  time = new Date(time);
  time.setHours(0);

  let getSeconds = time.getSeconds().toString();
  // let minutes = time.getHours().toString();
  let getMinutes = time.getMinutes().toString();
  let getHours = time.getHours().toString();

  if (getMinutes.length < 2) {
    getMinutes = "0" + getMinutes;
  }

  if (getSeconds.length < 2) {
    getSeconds = "0" + getSeconds;
  }

  while (getHours.length < 2) {
    getHours = "0" + getHours;
  }

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
