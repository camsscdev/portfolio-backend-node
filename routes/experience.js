const { Router } = require('express');
const { check, body } = require('express-validator');
const {
  experienceGet,
  experiencePut,
  experiencePost,
} = require('../controllers/experience');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', experienceGet);
router.put('/:id', experiencePut);
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('subtitle', 'El subtitulo es obligatorio').not().isEmpty(),
    check('startDate', 'La fecha inicial es obligatoria').not().isEmpty(),
    check('endDate', 'la fecha final es obligatoria').not().isEmpty(),
    check('goals', 'Las funciones son obligatorias').isArray({ min: 1 }),

    body(
      'goals.*.description',
      'La descripción de cada objetivo es obligatoria'
    )
      .not()
      .isEmpty(),
    validarCampos,
  ],
  experiencePost
);

module.exports = router;
