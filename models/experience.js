const { Schema, model } = require('mongoose');
const ExperienceSchema = Schema({
  title: {
    type: String,
    required: [true, 'el nombre es obligatorio'],
  },
  subtitle: {
    type: String,
    required: [true, 'el correo es obligatorio'],
    unique: true,
  },
  startDate: {
    type: String,
    required: [true, 'Fecha inicial es requerida'],
  },
  endDate: {
    type: String,
    required: [true, 'Fecha Final es requerida'],
  },
  goals: {
    type: [
      {
        description: {
          type: String,
          required: [true, 'La descripción del objetivo es obligatoria'],
        },
      },
    ],
    required: true,
  },
});

ExperienceSchema.methods.toJSON = function () {
  const { __v, _id, ...experienceData } = this.toObject();
  experienceData.uid = _id;

  return experienceData;
};

module.exports = model('Experience', ExperienceSchema);
