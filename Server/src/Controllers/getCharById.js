const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios.get(`${URL}/${id}`)

        if (!data.name) throw Error(`ID ${id} not found.`)
        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image: data.image,
            status: data.status,
            species: data.species
        }
        return res.status(200).json(character)
    } catch (error) {
        return error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
}