const divStyle = {
   background: "grey",
   border: "solid",
   margin: "2em",
}

const buttonStyle = {
   background: "red",
   color: "white",
}

const Card = ({name, status, species, gender, origin, image, onClose, id}) => {
   return (
      <div style={divStyle}>
         <button onClick={onClose} style={buttonStyle}>Close</button>
         <h2></h2>
         <img src={image} alt='' />
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>  );
}

export default Card