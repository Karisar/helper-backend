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
  let newPerson = req.body;
  let maxId = _.maxBy(demodata, 'id')

  newPerson.id = (maxId.id + 1);
  demodata.push(newPerson);

  //  console.log(demodata);
  res.status(200);
  res.send(demodata);
})

app.listen(port, () => {
  console.log(`Backend mock listening at http://localhost:${port}`)
})
