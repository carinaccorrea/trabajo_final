const models = require("../database/models/index");
const errors = require("../const/errors");

module.exports={

listar:async (req,res, next)=>{
    console.log('ejecutando listar usuarios en consola.');
    try {
        const users = await models.usuario.findAll()

        res.json({
            success: true,
            data: {
                usuarios: users
            }
        })

    } catch (err) {
        return next(err)
    }
    
},
listarInfo:async (req,res,next)=>{
    
    console.log('ejecutando listar un usuario en consola.');   
    try {
        const user = await models.usuario.findOne({
            where: {
                id: req.params.id
            }
        })            

        if(!user) return next(errors.UsuarioInexistente)

        res.json({
            success: true,
            data: {
                usuario: user
            }
        })

    } catch (err) {
        return next(err)
    }
},
crear: async (req, res, next) => {
    try {
        const user = await models.usuario.create(req.body)

        // encriptar contraseña con bcrypt
        user.password = user.cryptPassword(user.password) 
        await user.save() // guardo el usuario

        res.json({
            success: true,
            data: {
                id: user.id
            }
        })

    } catch (err) {
        return next(err)
    }
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba usuario en consola.');
       res.json({ message: 'Hola mundooo' });
       
    
    }catch(err){
        console.log(err)
    }
},


}