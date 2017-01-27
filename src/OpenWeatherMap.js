import React, { PropTypes } from 'react'
import moment from 'moment'

const OpenWeatherMap = ({ data, config }) => {
  const containerClassName = (config && config.containerClassName) ? config.containerClassName : 'react-open-weather-map'
  if (data) {
    const day = moment.unix(data.dt)
    const src = `http://openweathermap.org/img/w/${data.weather.weather[0].icon}.png`

    return (
      <div className={containerClassName}>
        <div className="main-heading">{data.name}, {data.weather.sys.country}</div>
        <div className="day">{day.format('dddd h:mm A') }</div>
        <div className="description">{data.weather.weather[0].description}</div>
        <div className="icon">
          <img src={src} alt={data.weather.weather[0].description} />
        </div>
        <div className="temperature">{data.weather.main.temp} &deg;C</div>
      </div>
    )
  }
  return (<div className={containerClassName} />)
}

OpenWeatherMap.propTypes = {
  data: PropTypes.object.isRequired,
  config: PropTypes.object,
}

export default OpenWeatherMap
