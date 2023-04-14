const express = require('express');
const fs = require('fs').promises;
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


const readifile = async () => {
  const response = await fs.readFile('src/talker.json', "utf-8");
  return JSON.parse(response);
}

app.get('/talker', async (req, res) => {
  const  persons = await readifile();
  if (persons.length === 0) {
    return res.status(200).send([])
  } 
  return  res.status(200).send(persons);
})
