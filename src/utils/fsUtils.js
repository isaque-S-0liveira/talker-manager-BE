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

  module.exports = {
    readfile,
}; 
