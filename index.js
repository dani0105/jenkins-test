const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'FAgUFrxXQN1kAOUuMnr1rAqN5',
    consumer_secret: 'fKU2MgIcanX5Grr0OSvRhxKxoMBO6qwJJJahiq4hMAYyqoDMxQ',
    access_token_key: '1520862634094231552-VNHg4TK2kNsRBemIazWwW28t6rozcU',
    access_token_secret: 'nXvGl9drqzDiBPBiyohonmNLA45TdPFtMKX3q42ps8sMW'
});

setInterval(()=>{
  client.post('statuses/update', {status: '#salvandoRedes2022IC'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })
}, 600000);

