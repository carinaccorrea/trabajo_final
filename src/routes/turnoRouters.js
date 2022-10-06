const router =require('express').Router()

const turnoController=require('../controllers/turnoController')

router.get('/prueba', turnoController.prueba)
router.get('/', turnoController.listar)
router.post('/', turnoController.crear)
router.get('/:id', turnoController.listarInfo)

module.exports=router