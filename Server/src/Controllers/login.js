const { User } = require("../DB_connection");

module.exports = async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) return res.status(400).json({ error: "Datos incompletos." });
        else {
            const userFind = await User.findOne({where: {email}})
            if(!userFind) return res.status(404).json({error: "Usuario no encontrado."})
            else {
                return userFind.password === password
                ? res.status(200).json({access: true})
                : res.status(403).json({error: "Contraseña incorrecta."})
            }
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};