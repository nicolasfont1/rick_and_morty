const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
    try {
        const { id, name, status, origin, image, species, gender } = req.body;

        if (!name || !status || !origin || !image || !species || !gender) return res.status(401).json({error: "Datos incompletos."});
        else{
            await Favorite.findOrCreate({
                where: {
                    id,
                    name,
                    status,
                    origin,
                    image,
                    species,
                    gender
                }
            });
            const allFav = await Favorite.findAll();
            return res.status(200).json(allFav);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message});
    }
};