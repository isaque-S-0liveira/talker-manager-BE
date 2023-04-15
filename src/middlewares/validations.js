const { readfile } = require('../utils/fsUtils');

const haveRecords = async (__req, res, next) => {
  const persons = await readfile();
    if (persons.length === 0) {
        return res.status(200).send([]);
      } 
      next();
};

const validationID = async (req, res, next) => {
  const { id } = req.params;
  const persons = await readfile();
  const verID = persons.find((el) => el.id === Number(id));
  if (!verID) {
    return res.status(404).json(
      {
      message: "Pessoa palestrante não encontrada"
    })
  }
  next();
};

module.exports = {
  haveRecords,
  validationID,
};