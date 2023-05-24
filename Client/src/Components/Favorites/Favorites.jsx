import style from "./Favorites.module.css"
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions"
import { useState } from "react";

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div className={style.divFilters}>
            <select className={style.filterButtonOrder} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select className={style.filterButtonGender} onChange={handleFilter}>
                <option value="Any">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>


            <div className={style.contenedor}> 
                {
                    myFavorites?.map((char) => {
                        return (
                            <Card
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                status={char.status}
                                species={char.species}
                                gender={char.gender}
                                origin={char.origin.name}
                                image={char.image}
                                onClose={char.onClose}
                            ></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites