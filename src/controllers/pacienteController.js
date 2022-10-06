const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res,next)=>{
    console.log('ejecutando listar pacientes en consola.');
    try {
        const obj = await models.paciente.findAll()

        res.json({
            success: true,
            data: {
                pacientes: obj
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
crear:async (req,res,next)=>{
    console.log('ejecutando crear UN PACIENTE en consola.');
    try {
        const obj = await models.paciente.create(req.body)

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
    console.log('ejecutando listar un PACIENTE en consola.');
    try {
        const obj = await models.paciente.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: models.paciente_medico,
                include: [{
                    model: models.medico
                }]
            }]
        })

        /////
        if(!obj) return next(errors.PacienteInexistente)

        /**
         * include: [{
                model: models.mutual                
            }],
         */
        /*const mut = await models.mutual.findOne({
            where: {
                id: obj.idMutual
            }
        })       

        nombreMut="sin mutual";
        if(mut) nombreMut=mut.nombre
*/
        res.json({
            success: true,
            data: {                
                paciente: obj
            }
        })

    } catch (err) {
        return next(err)
    }

},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba PACIENTES en consola.');
       res.json({ message: 'Hola mundo PACIENTES' });
       
    
    }catch(err){
        console.log(err)
    }
},


}