const router =require('express').Router()

const medicoController=require('../controllers/medicoController')

const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const medicoScheme = require('../middlewares/schemes/medico.scheme') // importar el scheme de validacion de datos

router.get('/prueba', medicoController.prueba)
router.get('/', medicoController.listar)
router.post('/', validate(medicoScheme.crearMedico),medicoController.crear)
router.get('/:id', medicoController.listarInfo)

module.exports=router