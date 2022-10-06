// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express")
const authRoutes = require("./auth.routes.js")
const usuarioRouters= require('./usuarioRouters.js')
const medicoRouters= require('./medicoRouters.js')
const pacienteRouters= require('./pacienteRouters.js')
const tratamientoRouters= require('./tratamientoRouters.js')
const turnoRouters= require('./turnoRouters.js')
const mutualRouters= require('./mutualRouters.js')

const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
  const router = Router()
  router.use('/medicos',medicoRouters)
  router.use('/pacientes',pacienteRouters)
  router.use('/tratamientos',tratamientoRouters)
  router.use('/turnos',turnoRouters)
  router.use('/mutuales',mutualRouters)

  router.use("/usuarios", decodeJWT, usuarioRouters)

  return router
}

const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}

module.exports = { rutas_init , rutas_auth } 