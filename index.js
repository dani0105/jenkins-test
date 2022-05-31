const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Proyecto de ${process.env.APP_NAME || 'Express' }`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

setInterval(()=>{
  client.post('statuses/update', {status: '#salvandoRedes2022IC'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })
}, process.env.TIME || 600000);

