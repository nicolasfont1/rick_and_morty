import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    return(
        <div className={style.divNav}>
            <div className={style.divSearchBar}>
                <SearchBar onSearch={props.onSearch}/>
            </div>
        </div>
    )
}

export default Nav