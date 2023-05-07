import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({name, status, species, gender, origin, image, id, onClose}) => {
   return (
      <div className={style.contenedor}>
         <div className={style.imgContainer}>
            <button onClick={()=>onClose(id)} className={style.closeButton}> X </button>
            <Link to={`/detail/${id}`}>
               <img src={image} alt='' className={style.charImage}/>
               <h2 className={style.charName}>{name}</h2>
            </Link>
         </div>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>  );
}

export default Card