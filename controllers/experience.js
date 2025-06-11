const { response, json } = require('express');
const Experience = require('../models/experience');

const experienceGet = async (req, res = response) => {
  const { title, subtitle } = req.query;

  const experience = await Experience.find();

  res.json({ msg: 'get api experience controller', experience });
};

const experiencePut = (req, res = response) => {
  const id = req.params.id;
  res.json({ msg: 'put api experience controller', id });
};

const experiencePost = async (req, res = response) => {
  const { title, subtitle, startDate, endDate, goals } = req.body;
  const experience = new Experience({
    title,
    subtitle,
    startDate,
    endDate,
    goals,
  });

  const existData = await Experience.findOne({ title, subtitle });

  if (existData) {
    return res.json({
      msg: 'datos  ya existen',
    });
  }
  await experience.save();
  res.json({ msg: 'post api experience controller', experience });
};
module.exports = {
  experienceGet,
  experiencePut,
  experiencePost,
};
