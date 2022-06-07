// hacemos un destructuri con sequalize con tadatype tipo de dato que lo requiere
const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  //defino el modelo con sequelize se crea  nombre mo delo argumento que va tener las propiedades
  //llamamos a sequelize y le pasammos el metodo define que es el que nos va a servir para definir el modelo, le pasamos 2 parametros, el primero es el nombre del modelo y el segundo la-s propiedades que va a teb¿ner el mismo por medio de un objeto 
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    // allowNull es olbligatorio este dato
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};