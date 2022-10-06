// SEEDER PARA CARGAR pacientes EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.tratamiento.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    titulo: "analisis de sangre",
                    descripcion: "detalle del analisis de sangre",
                    observacion: "observa",
                    idPaciente: 1,
                    idMedicoSolicitante:2,
                    idMedico:3
                }
            }),
            models.tratamiento.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    titulo: "examen oftalmologico",
                    descripcion: "chequeo de la vision",
                    observacion: "observab",
                    idPaciente: 2,
                    idMedicoSolicitante:2,
                    idMedico:5
                }
            }),
            
            models.tratamiento.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    titulo: "derrame ocular",
                    descripcion: "se procede a operar",
                    observacion: "exito",
                    idPaciente: 1,
                    idMedicoSolicitante:2,
                    idMedico:6
                }
            })
        ])
    },
};