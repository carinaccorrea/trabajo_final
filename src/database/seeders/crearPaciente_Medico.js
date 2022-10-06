// SEEDER PARA CARGAR relACION paciente-medico EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente_medico.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    pacienteId: "1",
                    medicoId: "2"
                }
            }),
            models.paciente_medico.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    pacienteId: "1",
                    medicoId: "3"
                }
            }),
            
            models.paciente_medico.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    pacienteId: "2",
                    medicoId: "2"
                }
            }),

            models.paciente_medico.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    pacienteId: "3",
                    medicoId: "1"
                }
            })
        ])
    },
};