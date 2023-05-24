const router = require("express").Router();

const getCharById = require("../Controllers/getCharById")
const { postFav, deleteFav } = require("../Controllers/handleFavorites")
const login = require("../Controllers/login")


router.get("/character/:id", getCharById)

router.get("/", login)

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router