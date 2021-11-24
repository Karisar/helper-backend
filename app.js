const demodata = require('./persons_demodata')
const express = require('express')
var _ = require('lodash');
const app = express()
const port = 3001

var cors = require('cors');
app.use(cors());
app.use(express.json()); // joku body parser jäänyt tuoreimmassa expressissä pois, tämä pitää itse asettaa

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World!');
})

app.get('/api/persons', (req, res) => {
  res.status(200);
  res.send(demodata);
})

app.post('/api/persons', (req, res) => {
  // TODO: back voisi generoida id:n
  console.log(_.maxBy(demodata, 'id')); // lodashista valmis funktio, ei tartte omaa for looppia viritellä
  let maxId = _.maxBy(demodata, 'id')
  console.log('new id : ' + (maxId.id + 1));
  console.log(req.body);
  demodata.push(req.body);
  res.status(200);
  console.log(demodata);
})

app.listen(port, () => {
  console.log(`Backend mock listening at http://localhost:${port}`)
})