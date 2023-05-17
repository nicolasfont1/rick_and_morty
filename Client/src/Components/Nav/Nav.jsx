import { Link } from "react-router-dom"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    return(
        <nav className={style.nav}>
            <div className={style.homeDiv}>
                <Link to="/home">
                    <img className={style.homeLogo} src={require("../../Resources/logo.gif")} alt=""/>
                </Link>
            </div>

            <div className={style.divAboutButton}>
                <button className={style.aboutButton}>
                    <Link to="/about">About</Link>
                </button>
            </div>

            <div className={style.divFavButton}>
                <button className={style.favButton}>
                    <Link to="/favorites">Favorites</Link>
                </button>
            </div>

            <div className={style.divLogoutButton}>
                <button onClick={props.logout} className={style.logoutButton}>
                    <Link to="/">Log Out</Link>
                </button>
            </div>

            <div className={style.divRandomButton}>
                <button onClick={() => props.onSearch(Math.floor(Math.random()*826))} className={style.randomButton}>🎲</button>
            </div>

            <div className={style.divSearchBar}>
                <SearchBar onSearch={props.onSearch}/>
            </div>
        </nav>
    )
}

export default Nav