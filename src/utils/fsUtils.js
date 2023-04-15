const fs = require('fs').promises;
const path = require('path');

const readfile = async () => {
    try {
        const response = await fs.readFile(path.resolve(__dirname, '../talker.json'));
        return JSON.parse(response);
    } catch (error) {
      console.log(`erro na leitura do arquivo: ${error}`);
    }
  };

  const readfileID = async (id) => {
    try {
        //const ID = Object.values(id);
        const response = await fs.readFile(path.resolve(__dirname, '../talker.json'));
        const responseID = JSON.parse(response).find((el) => el.id === Number(id));
        return responseID
    } catch (error) {
      console.log(`erro na leitura do arquivo: ${error}`);
    }
  };

  module.exports = {
    readfile,
    readfileID,
}; 
