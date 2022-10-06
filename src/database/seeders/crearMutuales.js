// SEEDER PARA CARGAR pacientes EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.mutual.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "IOMA"                    
                }
            }),
            models.mutual.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "OSDE"                                     
                }
            }),
            
            models.mutual.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "OSPE"                                     

                }
            }),
            models.mutual.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    nombre: "APROSS"                                      

                }
            })
        ])
    },
};