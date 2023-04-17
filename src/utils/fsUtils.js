const fs = require('fs').promises;
const path = require('path');

const TALKER_DATA_PATH = '../talker.json';

const readfile = async () => {
  try {
    const response = await fs.readFile(path.resolve(__dirname, TALKER_DATA_PATH));
    return JSON.parse(response);
  } catch (error) {
    console.log(`erro na leitura do arquivo: ${error}`);
  }
};

const readfileID = async (id) => {
  try {
    // const ID = Object.values(id);
    const response = await fs.readFile(path.resolve(__dirname, TALKER_DATA_PATH));
    const responseID = JSON.parse(response).find((el) => el.id === Number(id));
    return responseID;
  } catch (error) {
    console.log(`erro na leitura do arquivo: ${error}`);
  }
};

const writeNewPerson = async (person) => {
  try {
    const oldProfile = await readfile();
    const newPerson = {
      id: (oldProfile.length) + 1,
      ...person,
    };
    const allProfile = JSON.stringify([...oldProfile, newPerson]);
    await fs.writeFile(path.resolve(__dirname, TALKER_DATA_PATH), allProfile);
  } catch (error) {
    console.log(`erro na escrita do arquivo: ${error}`);
  }
};

module.exports = {
  readfile,
  readfileID,
  writeNewPerson,
}; 
