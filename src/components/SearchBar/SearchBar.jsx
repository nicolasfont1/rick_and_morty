 import { useState } from "react";
 import style from "./SearchBar.module.css"
 
 const SearchBar = (props) => {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearchClick = () => {
      
   }

   return (
      <div>
         <input className={style.barraSearch} type='text' onChange={handleChange} value={id} />
         <button className={style.botonSearch} onClick={() => {props.onSearch(id); setId("")}}>Add</button>
      </div>
   );
}

export default SearchBar