const {dateFormat, timeFormat, sunHours} = require('./dateMutations');

const transformCurrent = data => {
  const {
    main: { temp: temperature, feels_like, temp_max, temp_min, humidity },
    weather: [{ description, id: icon }],
    wind: { speed },
    sys: { country, sunrise, sunset },
    dt,
    name: city,
    coord: { lat, lon }
  } = data;
  // const { list } = forecast;
  return {
      temperature,
      feels_like,
      temp_max,
      temp_min,
      humidity,
      description,
      icon,
      wiSpeed: speed,
      dt: timeFormat(dt)
  };
};

const transformForecast = list => {

  const aggregateByDate = list
    .map(wPoint => ({
      date: dateFormat(wPoint.dt_txt),
      temp: wPoint.main.temp
    }))
    .reduce((groups, item) => {
      const group = groups[item.date] || { date: groups[item.date], temps: [] };
      group.date = item.date;
      group.temps.push(item.temp);
      groups[item.date] = group;
      return groups;
    }, {});

  const groupByDateArray = Object.keys(aggregateByDate).map(date => {
    return {
      date,
      temps: aggregateByDate[date].temps
    };
  });

  const tempMaxMinByDate = groupByDateArray.map(curr => {
    const maxMinByDate = curr.temps.reduce((agg, currEle) => {
      agg.date = curr.date;
      agg.min = agg.min === undefined || currEle < agg.min ? currEle : agg.min;
      agg.max = agg.max === undefined || currEle > agg.max ? currEle : agg.max;
      //agg[datesTemps[i].date] = minMax
      return agg;
    }, {});
    //console.log(x)
    return maxMinByDate;
  });
  return {
    list: tempMaxMinByDate
  };
};

module.exports = {transformCurrent, transformForecast};