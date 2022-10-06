// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
//const bcrypt=require("bcrypt.js");
const bcrypt = require('bcryptjs');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "14"
                },
                defaults: {
                    nombre: "aa",
                    apellido: "AA",
                    email: "emailAA@email.com",
                    edad: 25,
                    password:bcrypt.hashSync('secret10',10)
                }
            })
        ])
    },
};