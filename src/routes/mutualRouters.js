const router =require('express').Router()

const mutualController=require('../controllers/mutualController')

router.get('/prueba', mutualController.prueba)
router.get('/', mutualController.listar)
router.post('/', mutualController.crear)
router.get('/:id', mutualController.listarInfo)

module.exports=router