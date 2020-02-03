const dateFormat = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const timeFormat = dt => {
  const date = new Date(dt * 1000);
  return date.toLocaleTimeString();
};

const sunHours = dt => {
  const date = new Date(dt * 1000);
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();;
};

module.exports = { dateFormat, timeFormat, sunHours };