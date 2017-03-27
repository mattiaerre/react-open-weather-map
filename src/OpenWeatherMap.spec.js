import React from 'react';
import { create } from 'react-test-renderer';
import OpenWeatherMap from './OpenWeatherMap';
import sample from '../data/current-weather-data-sample.json';

describe('<OpenWeatherMap />', () => {
  const data = sample.weather;
  const config = { containerClassName: 'container-class-name' };

  const scenarios = [
    { description: 'w/o data w/o config', props: {} },
    { description: 'w data w/o config', props: { data } },
    { description: 'w/o data w config', props: { config } },
    { description: 'w data w config', props: { data, config } }
  ];

  scenarios.forEach((scenario) => {
    test(scenario.description, () => {
      const component = create(<OpenWeatherMap {...scenario.props} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
