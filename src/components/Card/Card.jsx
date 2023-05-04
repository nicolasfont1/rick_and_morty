import style from "./Card.module.css"

const Card = ({name, status, species, gender, origin, image, id, onClose}) => {
   return (
      <div className={style.contenedor}>
         <div className={style.imgContainer}>
            <img src={image} alt='' className={style.charImage}/>
            <button onClick={()=>onClose(id)} className={style.closeButton}> X </button>
            <h2 className={style.charName}>{name}</h2>
         </div>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>  );
}

export default Card