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
      message: 'Pessoa palestrante não encontrada',
    },
   );
  }
  next();
};

const validationEmail = (req, res, next) => {
  const { email } = req.body;
  const validateEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(400).json(
      {
      message: 'O campo "email" é obrigatório',
    },
   );
  } if (!validateEmail.test(email)) {
    return res.status(400).json(
      {
      message: 'O "email" deve ter o formato "email@email.com"',
    },
   );
  }
  next();
};

 const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json(
      {
      message: 'O campo "password" é obrigatório',
    },
   );
  } if (password.length < 6) {
    return res.status(400).json(
      {
      message: 'O "password" deve ter pelo menos 6 caracteres',
    },
   );
  }
  next();
 };

module.exports = {
  haveRecords,
  validationID,
  validationEmail,
  validatePassword,
};