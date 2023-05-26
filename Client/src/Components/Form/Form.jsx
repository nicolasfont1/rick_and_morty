import style from "./Form.module.css"
import validate from "./validation"
import { useState } from "react"

const Form = (props) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }

    return (

        <div className={style.divContenedor}>
            <div className={style.divImage}>
                <img className={style.floating} style={{width: 400 + "px", height: 300 + "px"}} src={require("../../Resources/rick-face.png")} alt="" />
                <h1 className={style.divImage}>Identify yourself unknown creature...</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label className={style.labelForm}>Email: </label>
                <input name="email"
                value={userData.email}
                placeholder="Enter your email..."
                type="text"
                onChange={handleChange}
                className={errors.email && style.warning} />
                {errors.email !== "" ? <p className={style.danger}>{errors.email}</p> : ""}

                <hr />

                <label className={style.labelForm}>Password: </label>
                <input name="password"
                value={userData.password}
                placeholder="Type here..."
                type="password"
                onChange={handleChange}
                className={errors.password && style.warning} />
                {errors.password !== "" ? <p className={style.danger}>{errors.password}</p> : ""}

                <hr />

                <button className={style.submitButton}>Submit</button>
            </form>
        </div>


    )
}

export default Form