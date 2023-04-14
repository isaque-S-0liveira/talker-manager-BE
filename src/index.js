const express = require('express');
const { readfile } = require('./utils/fsUtils');
const { haveRecords } = require('./middlewares/validations');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', haveRecords, async (__req, res) => {
  const persons = await readfile();
  return res.status(200).send(persons);
});

// app.get('/talker/:id', async(req, res) => {
 
// });

