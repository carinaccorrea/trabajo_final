const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res,next)=>{
    console.log('ejecutando listar mutuales en consola.');
    try {
        const muts = await models.mutual.findAll()

        res.json({
            success: true,
            data: {
                mutuales: muts
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
crear:async (req,res,next)=>{
    console.log('ejecutando crear UNA mutual en consola.');
    try {
        const obj = await models.mutual.create(req.body)

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
listarInfo:async (req,res,next)=>{
    console.log('ejecutando listar una mutual en consola.');
    try {
        const mut = await models.mutual.findOne({
            where: {
                id: req.params.id
            }
        })            

        if(!mut) return next(errors.MutualInexistente)

        res.json({
            success: true,
            data: {
                MUTUAL: mut
            }
        })

    } catch (err) {
        return next(err)
    }

},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba mutuales en consola.');
       res.json({ message: 'Hola mundo mutuales' });
       
    
    }catch(err){
        console.log(err)
    }
},


}