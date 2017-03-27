import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import favicon from 'express-favicon-short-circuit';
import OpenWeatherMap from './src/OpenWeatherMap';
import sample from './data/current-weather-data-sample.json';

const app = express();
app.use(express.static('public'));
app.use(favicon);

app.get('/', (req, res) => {
  const props = { data: sample.weather };
  const html =
    `
    <!DOCTYPE html>
      ${ReactDOMServer.renderToString(<OpenWeatherMap {...props} />)}
      <link rel="stylesheet" type="text/css" href="style.css">
    `;
  res.status(200);
  res.send(html);
});

const port = 3000;
app.listen(port, () => {
  console.log(`go to: http://127.0.0.1:${port}`); // eslint-disable-line no-console
});
