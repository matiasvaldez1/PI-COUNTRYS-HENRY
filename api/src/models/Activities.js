const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activities', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    difficulty:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    duration:{
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull:false,
    },
    season:{
        type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
        allowNull:false,
    },
    country:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});
};
