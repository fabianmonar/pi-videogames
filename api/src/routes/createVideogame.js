const { Router } = require('express');
//hago el destructuring y llama los modelos de la base de datos
const { Videogame, Genre } = require('../db.js');

const router = Router();

//Recibe la data colectada desde el formulario por el body
// Creo el videojuego en la db

router.post('/', async (req, res) => {
  // se crea un destructuring  para traer lo datos del body
  const { name, description, image, released, rating, platforms, genres } = req.body;

  let platformString = platforms.join(', ')
  // se crea la varaible gamecreated por medio de la await al modelo videogame le paso el metodo create con el que se crea el nuevo video juego
  let gameCreated = await Videogame.create({
    name,
    description,
    image, 
    released,
    rating,
    platforms: platformString,
  })
  // foreach ejecuta la funcion  callback una vez por cada elemento del array
  // genresgame agrega el genero 
  genres.forEach(async (G) => {
      let genresGame = await Genre.findOne({ where: { name: G } })
      await gameCreated.addGenre(genresGame)
  })
    res.send('Videogame created successfully!')
});

module.exports = router;