const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res, next)=>{
    console.log('ejecutando listar MEDICOS en consola.');
    try {
        const obj = await models.medico.findAll()

        res.json({
            success: true,
            data: {
                medicos: obj
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
listarInfo:async (req,res,next)=>{
    
    console.log('ejecutando listar un MEDICO en consola.');   
    try {
        const obj = await models.medico.findOne({
            where: {
                id: req.params.id
            }
        })            

        if(!obj) return next(errors.MedicoInexistente)

        res.json({
            success: true,
            data: {
                medico: obj
            }
        })

    } catch (err) {
        return next(err)
    }
},
crear:async (req,res,next)=>{
    console.log('ejecutando crear MEDICO en consola.');
    
    try {
        const obj = await models.medico.create(req.body)

        res.json({
            success: true,
            data: {
                id: obj.id
            }
        })

    } catch (err) {
        return next(err)
    }
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba MEDICO en consola.');
       res.json({ message: 'Hola MEDICOS' });
       
    
    }catch(err){
        console.log(err)
    }
},


}