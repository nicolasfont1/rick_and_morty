const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = (req, res) => {
    const {id} = req.params

    axios.get(`${URL}/${id}`)
    .then((result) => result.data)
    .then(({name, gender, origin, status, image, species}) => {
        let character = {
            id, 
            name,
            gender,
            origin,
            image,
            status,
            species
        }
        return res.status(200).json(character)
    })
    .catch((error) => res.status(500).send(error.message))
}

module.exports = getCharById

// const {id} = req.params
// let char = undefined

// axios.get(URL+id)
// .then(response => response.data)
// .then(data => char = data)
// .catch(err => res.status(500).send(err.message))

// char.id
// ? res
//     .status(200)
//     .json(char.name, char.id, char.status, char.gender, char.species, char.origin, char.image)
// : res
//     .status(404)
//     .send("Error 404, not found.")