const express = require('express');
const { readfile, readfileID } = require('./utils/fsUtils');
const { haveRecords, validationID } = require('./middlewares/validations');
const generateToken = require('./utils/generateToken');

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

app.get('/talker/:id', validationID, async (req, res) => {
  const { id } = req.params;
  const personID = await readfileID(id);
  return res.status(200).send(personID);
});

app.post('/login', async (__req, res) => {
  // const newPerson = req.body;
  const token = generateToken();
  // const addNewPerson = {
  //   ...newPerson
  // }
  // await writeNewPerson(addNewPerson);
  return res.status(200).json({ token });
});