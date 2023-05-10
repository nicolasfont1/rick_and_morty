import style from "./Favorites.module.css"
import Card from "../Card/Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites}) => {
    return (
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
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)