const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res,next)=>{
    console.log('ejecutando listar tratamientos en consola.');
    try {
        const obj = await models.tratamiento.findAll()

        res.json({
            success: true,
            data: {
                tratamientos: obj
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
crear:async (req,res,next)=>{
    console.log('ejecutando crear UN tratamiento en consola.');
    try {
        const obj = await models.tratamiento.create(req.body)

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
    console.log('ejecutando listar un tratamiento en consola.');
    try {
        const obj = await models.tratamiento.findOne({
            where: {
                id: req.params.id
            }
        })            

        if(!obj) return next(errors.TratamientoInexistente)

         
        nombrePaciente=obj.idPaciente;
        nombreMedicSolic=obj.idMedicoSolicitante;
        nombreMedico=obj.idMedico;
        nombreMut="sin mutual";

        //se obtiene info mutual
        const mut = await models.mutual.findOne({
            where: {
                id: obj.idMutual
            }
        })            
        if(mut) nombreMut=mut.nombre

        // se obtiene info del paciente
        const unPaciente = await models.paciente.findOne({
            where: {
                id: obj.idPaciente
            }
        })            
        if(unPaciente) nombrePaciente=unPaciente.nombre
        
        
        //se obtiene medico solicita el tratamiento
        const unMedicoS = await models.medico.findOne({
            where: {
                id: obj.idMedicoSolicitante
            }
        })            
        if(unMedicoS) nombreMedicSolic=unMedicoS.nombre

        //se obtiene medico q hace tratamiento
        const unMedico = await models.medico.findOne({
            where: {
                id: obj.idMedico
            }
        })            
        if(unMedico) nombreMedico=unMedico.nombre
       
        res.json({
            success: true,
            data: {
                PACIENTE: nombrePaciente,
                MEDICO:nombreMedicSolic,
                PROFESIONAL:nombreMedico,
                MUTUAL:nombreMut,
                tratamiento: obj
            }
        })

    } catch (err) {
        return next(err)
    }

},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba tratamientos en consola.');
       res.json({ message: 'Hola mundo tratamientos' });
       
    
    }catch(err){
        console.log(err)
    }
},


}