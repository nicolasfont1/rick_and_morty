const { User } = require("../DB_connection");

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ error: "Datos incompletos." });
        else {
            const newUser = await User.findOrCreate({
                where: { email, password }
            });
            return res.status(200).json(newUser);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};