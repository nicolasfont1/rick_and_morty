const server = require("./app")
const PORT = 3001

const { database } = require("./DB_connection")

database.sync({force: false}).then(() => {
    server.listen(PORT, () => console.log(`Server raised in port ${PORT}.`))
});