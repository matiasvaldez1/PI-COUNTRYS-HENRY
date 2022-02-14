const { Country, Activities } = require('../db.js');
const { Router } = require('express');
const axios = require('axios');
const { Op, Sequelize } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/* GET https://restcountries.com/v3/all
GET https://restcountries.com/v3/name/{name}
GET https://restcountries.com/v3/alpha/{code} */

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getCountries= async () => {
    const countries= await axios.get(`https://restcountries.com/v3/all`);
    const countriesInfo = await countries.data.map(el => {
        return {
            name: el.name.common,
            population: el.population,
            capital: el.capital,
            id: el.cca3,
            continent: el.continents,
            subregion: el.subregion,
            img: el.flags[0],
            area: el.area,
        }
    })
    return countriesInfo;
    }

    const getDB = async ()=>{
        return await Country.findAll({
            attributes: ['img', 'name', 'continent', 'population', 'id'],
            include:{
                model: Activities,
                attributes: ['name'],
                through:{
                    attributes: []
                }
            }
        }
    )}

router.get("/countries",async (req,res)=>{
    const {name} = req.query;
    if(name){
        const dbCountry = await Country.findAll({
            where: {name: {[Op.iLike]: `%${name}%`}}
            })
        console.log(dbCountry)
        return res.send(dbCountry)
    }

    let dbCountries = await getDB();

    const countriesApi= await getCountries(); 

    countriesApi.forEach( el => {

        Country.findOrCreate({
            where:{
            name: el.name,
            population: el.population,
            capital: el.capital ? el.capital[0] : "This country has no capital.",
            id: el.id,
            continent: el.continent[0],
            subregion: el.subregion ? el.subregion[0] : "No subregion found.",
            img: el.img,
            area: el.area,
        }
        })
    })
    dbCountries = await getDB();
    res.json(dbCountries);
})

router.get("/countries/:id",async (req,res)=>{
    const {id} = req.params;
    if(id){
        const idCountry = await Country.findAll({
            where: {id : id.toUpperCase()},
            include:{
                model: Activities,
                attributes: ['name', 'difficulty', 'duration', 'season', 'id'],
                through:{
                    attributes: []
                }
            }
            })
        idCountry.length
        ? res.status(200).send(idCountry)
        : res.status(404).send("Country not found")
    }
})
router.post("/activity",async (req,res)=>{
    const {
        name,
        difficulty,
        duration,
        season,
        country} = req.body;
    if(!name || !difficulty){
        res.status(404).send("Please complete the required fields.")
    }
    else{
        let actCreate = await Activity.create({
            name, difficulty, duration, season
        })
    
        let dbCountry = await Country.findAll({
            where: { name: country },
        })
        actCreated.addCountry(dbCountry);
        res.status(200).send('Activity succesfully created');
    }
})

module.exports = router;