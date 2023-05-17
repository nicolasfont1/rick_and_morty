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
                <img className={style.imageRick} src={require("../../Resources/rick-face.png")} alt="" />
                <h1 className={style.divImage}>Identify yourself unknown creature...</h1>
            </div>
            <form>
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

                <button className={style.submitButton} onClick={handleSubmit}>Submit</button>
            </form>
        </div>


    )
}

export default Form