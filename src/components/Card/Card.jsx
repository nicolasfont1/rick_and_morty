import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({ name, status, species, gender, origin, image, id, onClose, agregarFav, eliminarFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      isFav ? eliminarFav(id) : agregarFav({name, status, species, gender, origin, image, id, onClose});
      setIsFav(!isFav)
      //Linea 12, si está en true lo pasa a false y viceversa, siempre lo pasa al contrario.
   }

   useEffect(() => {
      myFavorites.forEach((character) => {
         if (character.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.contenedor}>
         <div className={style.imgContainer}>
            <button className={style.favButton} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
            <button onClick={() => onClose(id)} className={style.closeButton}> X </button>
            <Link to={`/detail/${id}`}>
               <img src={image} alt='' className={style.charImage} />
               <h2 className={style.charName}>{name}</h2>
            </Link>
         </div>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>);
}

const mapStateToProps = (state) => {
   return{
       myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      agregarFav: (character) => dispatch(addFav(character)),
      eliminarFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

//Observar que en mapDispatchToProps la propiedad agregarFav es quien contiene el dispatch de la action importda de actions.js
//por lo tanto, el nombre que llega a props es la propiedad del objeto retornado por mapDispatchToProps.

//La forma en la que hice el mapDTP y mapSTP es para componentes de clase, aca estoy usando funcionales.