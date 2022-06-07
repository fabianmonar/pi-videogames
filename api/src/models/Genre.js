const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.


module.exports = (sequelize) => {

    //defino el modelo como genre y dentro pongo estas propiedades y contenido
    sequelize.define('genre', {
      id: {
        type: DataTypes.INTEGER,
        // primaryKey hace las relaciones en las tablas 
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING
      }
    })
};