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

    it('then it should be empty', () => {
      wrapper.should.be.empty
    })
  })

  describe('when rendered w/ and openweathermap current weather data object', () => {
    const props = { data: sample }
    const wrapper = shallow(<OpenWeatherMap {...props} />)

    it('then it should not be empty', () => {
      wrapper.should.not.be.empty
    })

    const mainHeading = `${sample.weather.name}, ${sample.weather.sys.country}`
    it(`then it should have a div w/ text "${mainHeading}"`, () => {
      wrapper.find('#main-heading').should.have.text(mainHeading)
    })

    const day = moment.unix(sample.weather.dt)
    const dayFormat = 'dddd h:mm A'
    it(`then it should have a div w/ text "${day.format(dayFormat)}"`, () => {
      wrapper.find('#day').should.have.text(day.format(dayFormat))
    })
  })
})
