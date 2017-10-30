import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const OpenWeatherMap = ({ data, config }) => {
  if (data === OpenWeatherMap.defaultProps.data) {
    return (
      <div className={config.containerClassName} />
    );
  }

  const day = moment.unix(data.dt);
  const src = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className={config.containerClassName}>
      <div className="main-heading">{data.name}, {data.sys.country}</div>
      <div className="day">{day.format('dddd h:mm A')}</div>
      <div className="description">{data.weather[0].description}</div>
      <div className="icon">
        <img src={src} alt={data.weather[0].description} />
      </div>
      <div className="temperature">{data.main.temp} &deg;C</div>
    </div>
  );
};

OpenWeatherMap.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
};

OpenWeatherMap.defaultProps = {
  data: { weather: [{}], sys: {}, main: {} },
  config: { containerClassName: 'react-open-weather-map' },
};

export default OpenWeatherMap;
