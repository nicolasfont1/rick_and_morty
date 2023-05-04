 import { useState } from "react";
 import style from "./SearchBar.module.css"
 
 const SearchBar = (props) => {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input className={style.barraSearch} type='text' onChange={handleChange} />
         <button className={style.botonSearch} onClick={() => {props.onSearch(id)}}>Add</button>
      </div>
   );
}

export default SearchBar