/*
SALALILA, DAYNA MICAELA M
WD-202
 */

const express = require('express');
const app = express();

const information = [
  {
    id: 1,
    name: 'Carmela',
    email: 'mela@gmail.com',
    age: 25,
    salary: 25000,
  },
  {
    id: 2,
    name: 'Joseph',
    email: 'joe@yahoo.com',
    age: 30,
    salary: 45000,
  },
  {
    id: 3,
    name: 'James',
    email: 'james@msn.com',
    age: 35,
    salary: 30000,
  },
  {
    id: 4,
    name: 'John',
    email: 'john@gmail.com',
    age: 40,
    salary: 25000,
  },
  {
    id: 5,
    name: 'Frank',
    email: 'frank@yahoo.com',
    age: 45,
    salary: 45000,
  },
  {
    id: 6,
    name: 'Alex',
    email: 'alex@msn.com',
    age: 21,
    salary: 33000,
  },
];

app.get('/', (req, res) => {
  res.send(
    '<p>/data - to see all records</p><br><p>/data/:id - to see a record by id</p>'
  );
});

app.get('/data', (req, res) => {
  res.send(information);
});

app.get('/data/:id', (req, res) => {
  const info = information.find((h) => h.id === parseInt(req.params.id));
  if (!info)
    return res.status(404).send('The data with the given ID was not found.');
  res.send(info);
});

app.listen(3000, () => console.log('Listening on port 3000..'));
