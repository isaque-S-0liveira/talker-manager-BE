const express = require('express');
const { readfile, readfileID, writeNewPerson, editTalker } = require('./utils/fsUtils');
const {
  haveRecords,
  validationID,
  validationEmail,
  validatePassword,
  validateAuthorization,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate } = require('./middlewares/validations');
const generateToken = require('./utils/generateToken');

generateToken();

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

app.post('/login',
  validationEmail,
  validatePassword,
  async (__req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
  });

app.post('/talker',
validateAuthorization,
validateTalk,
validateWatchedAt,
validateRate,
validateAge,
validateName, async (req, res) => {
  const { name, age, talk } = req.body;
  const oldProfile = await readfile();
  const addNewPerson = {
    name,
    age,
    talk,
  };
  await writeNewPerson(addNewPerson);
  res.status(201).json({ id: (oldProfile.length) + 1, name, age, talk });
});

app.put('/talker/:id',
validateAuthorization,
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate,
validationID,
async (req, res) => {
  const { id } = req.params;
  const person = req.body;
  const updatePerson = await editTalker(Number(id), person);

   res.status(200).send(updatePerson);
});
