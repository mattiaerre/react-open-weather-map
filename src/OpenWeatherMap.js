import React, { PropTypes } from 'react'
import moment from 'moment'

const OpenWeatherMap = ({ data }) => {
  if (data) {
    const weather = data.weather
    const day = moment.unix(weather.dt)
    return (
      <div>
        <div id="main-heading">{weather.name}, {weather.sys.country}</div>
        <div id="day">{day.format('dddd h:mm A')}</div>
      </div>
    )
  }
  return (<div />)
}

OpenWeatherMap.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OpenWeatherMap
