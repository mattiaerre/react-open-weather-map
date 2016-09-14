/* global describe, it */
/* eslint no-unused-expressions: off */

import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import moment from 'moment'
import OpenWeatherMap from './OpenWeatherMap'
import sample from '../data/current-weather-data-sample.json'

chai.should()
chai.use(chaiEnzyme())

describe('<OpenWeatherMap />', () => {
  describe('when rendered w/o data', () => {
    const props = { data: undefined }
    const wrapper = shallow(<OpenWeatherMap {...props} />)
    const containerClassName = 'react-open-weather-map'

    it(`then it should have className "${containerClassName}"`, () => {
      wrapper.should.have.className(containerClassName)
    })

    it('then it should be empty', () => {
      wrapper.should.be.empty
    })
  })

  describe('when rendered w/ an openweathermap current weather data object', () => {
    const props = { data: sample.weather }
    const wrapper = shallow(<OpenWeatherMap {...props} />)

    it('then it should not be empty', () => {
      wrapper.should.not.be.empty
    })

    const mainHeading = `${sample.weather.name}, ${sample.weather.sys.country}`

    it(`then it should have a div w/ text "${mainHeading}"`, () => {
      wrapper.find('.main-heading').should.have.text(mainHeading)
    })

    const day = moment.unix(sample.weather.dt)
    const dayFormat = 'dddd h:mm A'

    it(`then it should have a div w/ text "${day.format(dayFormat)}"`, () => {
      wrapper.find('.day').should.have.text(day.format(dayFormat))
    })

    const description = `${sample.weather.weather[0].description}`

    it(`then it should have a div w/ text "${description}"`, () => {
      wrapper.find('.description').should.have.text(description)
    })

    it('then it should have a div w/ an img w/ "src" and "alt" attributes', () => {
      wrapper.find('.icon img').should.have.attr('src')
      wrapper.find('.icon img').should.have.attr('alt')
    })

    const src = `http://openweathermap.org/img/w/${sample.weather.weather[0].icon}.png`

    it(`then the "src" attribute should equal "${src}""`, () => {
      wrapper.find('.icon img').should.have.attr('src').equal(src)
    })

    it(`then the "alt" attribute should equal "${description}""`, () => {
      wrapper.find('.icon img').should.have.attr('alt').equal(description)
    })

    const temperature = `${sample.weather.main.temp} °C`

    it(`then it should have a div w/ text "${temperature}"`, () => {
      wrapper.find('.temperature').should.have.text(temperature)
    })
  })

  describe('when rendered w/ a config object', () => {
    const config = { containerClassName: 'container-class-name' }
    const props = { data: sample.weather, config }
    const wrapper = shallow(<OpenWeatherMap {...props} />)

    it(`then it should have className "${config.containerClassName}"`, () => {
      wrapper.should.have.className(config.containerClassName)
    })
  })
})
