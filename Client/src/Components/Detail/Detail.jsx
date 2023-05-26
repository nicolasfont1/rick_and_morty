import style from "./Detail.module.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.divDetail}>
            <div className={style.divText}>
                <h1>Take a look here Morty...</h1>
                <h1>It name is {character.name && character.name},</h1>
                <h1>it's currently {character.status && character.status}.</h1>
                <h1>I think that is a {character.gender && character.gender} {character.species && character.species},</h1>
                <h1>which is originally from {character.origin?.name && character.origin?.name}.</h1>
            </div>
            <div className={style.divImage}>
                <img className={style.monitorImage} src={require("../../Resources/detail_monitor.png")} alt="" />
                <img className={style.charImage} src={character.image && character.image} alt="" />
            </div>
        </div>
    )
}


//conditional chaining en origin ("?")
//es ideal que trabajemos con esto cuando renderizamos info de una api

export default Detail