const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const Twitter = require("twitter");
const axios = require('axios').default;
const app = express();
const port = 3000;

const lastValue = {
  temperature:0,
  humidity:0,
  date:''
}

app.get('/', (req, res) => {
  res.send(`Proyecto de ${process.env.APP_NAME || 'Express'}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

app.get('/weather', (req, res) => {
  res.status(200).json(lastValue);
})


const interval = setInterval(() => {
  axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: 40.71,
      longitude: -74.01,
      hourly: 'temperature_2m,relativehumidity_2m',
      timezone: 'America/New_York'
    }
  }).then(data => {
    let date = new Date();
    const date1 = date.toISOString().split('T')[0];
    date = `${date1}T${date.getUTCHours()}:00`;
    const index = data.data.hourly.time.indexOf(date);
    
    lastValue.date = new Date();
    lastValue.humidity = data.data.hourly.relativehumidity_2m[index];
    lastValue.temperature = data.data.hourly.temperature_2m[index];
    publishTweet()
  }).catch(err=>{
    console.error(err);
    process.exit(1);
  })
}, process.env.TIME || 600000);

function publishTweet(){
  return client.post("statuses/update", { status: `Temperatura:${lastValue.temperature}\nHumedad:${lastValue.humidity}\nFecha:${lastValue.date.toISOString()}\n#salvandoRedes2022IC` }, function (error, tweet, response) {
    if (error) {
      console.error(err);
      process.exit(1);
    }
    console.log("Publicado");
  });
}

