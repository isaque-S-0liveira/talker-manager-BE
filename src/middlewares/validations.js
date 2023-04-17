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

const validateAuthorization = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  } if (typeof authorization !== 'string' || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  } if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  } if (!Number.isInteger(age) || age < 18) {
    return res.status(400).json(
      { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
    );
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  } if (!isFormatDate.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRateSeparate = (rate) => !Number.isInteger(rate) || rate < 1 || rate > 5;

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (rate === undefined || rate.length === 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  } if (validateRateSeparate(rate)) {
    return res.status(400).json(
      { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' },
    );
  }
  next();
};

module.exports = {
  haveRecords,
  validationID,
  validationEmail,
  validatePassword,
  validateAuthorization,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};