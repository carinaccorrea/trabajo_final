const router =require('express').Router()

const tratamientoController=require('../controllers/tratamientoController')

router.get('/prueba', tratamientoController.prueba)
router.get('/', tratamientoController.listar)
router.post('/', tratamientoController.crear)
router.get('/:id', tratamientoController.listarInfo)

module.exports=router