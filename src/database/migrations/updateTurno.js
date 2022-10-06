'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('turno', 'fechaTurno', {
                type: Sequelize.DATE,
                allowNull: true,
                
            })
           
        ]);
    },

    down: (queryInterface, Sequelize) => {
        
    }
};