import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import About from "./Components/About/About"
import Cards from "./Components/Cards/Cards"
import Detail from "./Components/Detail/Detail"
import Error404 from "./Components/Error404/Error404"
import Favorites from "./Components/Favorites/Favorites"
import Form from "./Components/Form/Form"
import Nav from "./Components/Nav/Nav"

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const EMAIL = "nicolasfont15@gmail.com"
   const PASSWORD = "nicolas461"
   const location = useLocation()

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate("/home")
      }
   }

   const logout = () => {
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if(data.name && !characters.find((char) => char.id === data.id)){
         setCharacters((oldChars) => [...oldChars, data]);
      } else if(characters.find((char) => char.id === data.id)){
         window.alert(`Character ID: ${id} already exists!`)
      } else {
         window.alert('Please, insert an ID.');
      }
   });
   }
   
   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id))
   }

   return (
      <div className='App'>
         {location.pathname != "/" ? <Nav onSearch={onSearch} logout={logout}/> : ""}

         <Routes>
            <Route path="/*" element={<Error404 />} />
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>

      </div>
   );
}

export default App;