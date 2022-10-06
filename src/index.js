// aplicacion basica con express

const express = require('express'); // importa express
const globalConstants= require('./const/globalConstants'); // importa seteos globales
const routerConfig=require('./routes/indexRutas') //importa rutas

let errorHandler = require('./middlewares/error')
let createError = require('http-errors') // se utiliza para crear un error personalizado

const configuracionApi=(app) => {
    app.use(express.json()); // permite que express entienda json
    app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post
    
}

const configuracionRouter=(app) =>{
  app.use('/api/',routerConfig.rutas_init())
  app.use('/', routerConfig.rutas_auth())

  app.use(function (req, res, next) { 
    next(createError(404)) // si no se encuentra la ruta, se envia un error 404
  })
  app.use(errorHandler) // configurar el middleware de manejo de errores
}

const init = () => {
    const app=express(); //se crea instancia de express
    configuracionApi(app); //se configuras aplic

    configuracionRouter(app)
    app.listen(globalConstants.PORT);
    console.log('corriendo aplic ' + globalConstants.PORT);
}

init();