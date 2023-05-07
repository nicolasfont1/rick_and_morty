import { Link } from "react-router-dom"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    return(
        <nav className={style.nav}>
            <div className={style.homeDiv}>
                <Link to="/">
                    <img className={style.homeLogo} src={require("../logo.gif")} alt=""/>
                </Link>
            </div>

            <div className={style.divAboutButton}>
                <button className={style.aboutButton}>
                    <Link to="/about">About</Link>
                </button>
            </div>

            <div className={style.divSearchBar}>
                <SearchBar onSearch={props.onSearch}/>
            </div>
        </nav>
    )
}

export default Nav