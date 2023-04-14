const { readfile } = require('../utils/fsUtils');

const haveRecords = (__req, res, next) => {
  const persons = readfile();
    if (persons.length === 0) {
        return res.status(200).send([]);
      } 
      next();
};

module.exports = {
  haveRecords,
};