const users = require("../Utils/users")

const login = (req, res) => {
    const {email, password} = req.query

    const userFound = users.find(user => 
        user.email === email && user.password === password
    )

    userFound
    ? res.status(200).json({access: true})
    : res.status(200).json({access: false})
}

module.exports = login

//El login se rompia porque en linea 7 el codigo estaba entre {}
//"No es necesario abrir llaves si solo hay una expresion en el cuerpo
//de la funcion." dijo el ChatGPT