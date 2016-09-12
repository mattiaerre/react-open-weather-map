import React, { PropTypes } from 'react'
import moment from 'moment'

const OpenWeatherMap = ({ data }) => {
  if (data) {
    const day = moment.unix(data.dt)
    const src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    return (
      <div className="react-open-weather-map">
        <div className="main-heading">{data.name}, {data.sys.country}</div>
        <div className="day">{day.format('dddd h:mm A') }</div>
        <div className="description">{data.weather[0].description}</div>
        <div className="icon">
          <img src={src} alt={data.weather[0].description} />
        </div>
        <div className="temperature">{data.main.temp} &deg;C</div>
      </div>
    )
  }
  return (<div />)
}

OpenWeatherMap.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OpenWeatherMap
