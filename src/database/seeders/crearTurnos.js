// SEEDER PARA CARGAR pacientes EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.turno.findOrCreate({
                where: {
                    id: "5"
                },
                defaults: {
                    idPaciente: 1,
                    idMedico: 1,
                    idMutual: 1                                   
                }
            }),
            models.turno.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    idPaciente: 1,
                    idMedico: 2,
                    idMutual: 1 
                                    
                }
            }),
            
            models.turno.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    idPaciente: 2,
                    idMedico: 5,
                    idMutual: 2                

                }
            }),
            models.turno.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    idPaciente: 3,
                    idMedico: 3,
                    idMutual: 1 
                }
            })
        ])
    },
};