const { Favorite } = require("../DB_connection");

const deleteFav = (req, res) => {
    try {
        const { id } = req.params;

        const favDeleted = Favorite.destroy({where: {id}})
        if(!favDeleted) return res.status(404).json({error: "Ningun favorito tiene ese ID."})
        else {
            return favDeleted
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = deleteFav;