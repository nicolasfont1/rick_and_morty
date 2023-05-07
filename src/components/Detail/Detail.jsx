import style from "./Detail.module.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
                setCharacter(data);
           } else {
                window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={style.divDetail}>
            <h1>Name: {character.name && character.name}</h1>
            <h1>Aca me falta poner todo el detail</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
        </div>
    )
}

//conditional chaining en origin ("?")
//es ideal que trabajemos con esto cuando renderizamos info de una api

export default Detail