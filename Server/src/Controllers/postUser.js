const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ error: "Datos incompletos." });
        else {
            const newUser = await User.findOrCreate({
                where: { email, password }
            });
            return newUser;
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

module.exports = postUser;