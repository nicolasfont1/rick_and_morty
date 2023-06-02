const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const { name, status, origin, image, species, gender } = req.body;

        if (!name || !status || !origin || !image || !species || !gender) return res.status(401).json({error: "Datos incompletos."});
        else{
            const newFav = await Favorite.findOrCreate({
                where: {
                    name,
                    status,
                    origin,
                    image,
                    species,
                    gender
                }
            });
            const allFav = await Favorite.findAll();
            return res.status(200).json({...allFav, newFav}) //Tengo duda aca.
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = postFav;