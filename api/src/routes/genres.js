require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db.js');

const router = Router();

// Obtengo los genres desde la API y los guardo en la DB, por medio de un try catch

router.get('/', async function (req, res) {
    try{
        // crea la constante que hace una llamada a la api, despuese:
        const genresAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        genresAPI.data.results.forEach(p => {
            Genre.findOrCreate({
                where: { name: p.name } // donde nombre tengo el mismo nombre que se para por pametro
            })
        })
        const genresDB = await Genre.findAll()//findAll de vuelve una cadena de un grupo
        res.json(genresDB)
    } catch (err) {
        res.status(404).json({ err })
    }
})


module.exports = router;