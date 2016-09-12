import React, { PropTypes } from 'react'
import moment from 'moment'

const OpenWeatherMap = ({ data }) => {
  if (data) {
    const weather = data.weather
    const day = moment.unix(weather.dt)
    const src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`

    return (
      <div className="react-open-weather-map">
        <div className="main-heading">{weather.name}, {weather.sys.country}</div>
        <div className="day">{day.format('dddd h:mm A') }</div>
        <div className="description">{weather.weather[0].description}</div>
        <div className="icon">
          <img src={src} alt={weather.weather[0].description} />
        </div>
        <div className="temperature">{weather.main.temp} &deg;C</div>
      </div>
    )
  }
  return (<div />)
}

OpenWeatherMap.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OpenWeatherMap
