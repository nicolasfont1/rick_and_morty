const router = require("express").Router();

const getCharById = require("../Controllers/getCharById");
const login = require("../Controllers/login");
const postUser = require("../Controllers/postUser");
const postFav = require("../Controllers/postFav");
const deleteFav = require("../Controllers/deleteFav");


router.get("/character/:id", getCharById);

router.post("/", postUser);

router.get("/", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;