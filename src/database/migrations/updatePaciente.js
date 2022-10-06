'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('paciente', 'idMutual', {
                type: Sequelize.BIGINT,
                allowNull: true,
            }),
            queryInterface.addColumn('paciente', 'codMutual', {
                type: Sequelize.BIGINT,
                allowNull: true,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        
    }
};