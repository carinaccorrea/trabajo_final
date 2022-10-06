const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res,next)=>{
    console.log('ejecutando listar turnos en consola.');
    try {
        const obj = await models.turno.findAll()

        res.json({
            success: true,
            data: {
                turnos: obj
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
crear:async (req,res,next)=>{
    console.log('ejecutando crear UN turno en consola.');
    try {
        const obj = await models.turno.create(req.body)

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
    console.log('ejecutando listar un turno en consola.');
    try {
        const obj = await models.turno.findOne({
            where: {
                id: req.params.id
            }
        })            

        if(!obj) return next(errors.TurnoInexistente)

        const mut = await models.mutual.findOne({
            where: {
                id: obj.idMutual
            }
        })   
        nombreMut="sin mutual";
        if(mut) nombreMut=mut.nombre

        res.json({
            success: true,
            data: {
                MUTUAL:nombreMut,
                turno: obj
            }
        })

    } catch (err) {
        return next(err)
    }

},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba turnos en consola.');
       res.json({ message: 'Hola mundo turnos' });
       
    
    }catch(err){
        console.log(err)
    }
},


}