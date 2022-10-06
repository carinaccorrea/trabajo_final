'use strict' 

module.exports = (sequelize, DataTypes) => {

  let Turno = sequelize.define('turno', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true,  
      allowNull: false 
    },
    idPaciente: { 
      type: DataTypes.BIGINT, 
      allowNull: false 
    },
    idMedico: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    idMutual: {
      type: DataTypes.BIGINT
    },
    fechaTurno:{
      type:DataTypes.DATE
    },

    createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at', 
      defaultValue: DataTypes.NOW, 
      allowNull: false 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { 
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true, 
    freezeTableName: true, 
  })

  Turno.associate = models => {
    
  }

  return Turno
}