const router =require('express').Router()

const pacienteController=require('../controllers/pacienteController')

router.get('/prueba', pacienteController.prueba)
router.get('/', pacienteController.listar)
router.post('/', pacienteController.crear)
router.get('/:id', pacienteController.listarInfo)

module.exports=router