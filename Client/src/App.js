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
   const location = useLocation()

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { accessBack } = data
         setAccess(accessBack);
         console.log("access state: ", access)
         console.log("accessBack: ", accessBack)
         access && navigate('/home')
      } catch (error) {
         return window.alert(error.message)
      }
   }

   const logout = () => {
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const onSearch = async (id) => {
      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

         if(data.name && !characters.find((char) => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data]);
         } else if(characters.find((char) => char.id === data.id)){
            throw Error(`Character ID: ${id} already exists!`)
         }
      } catch (error) {
         if(error.message.includes("ID")) return window.alert(error.message)
         if(error.message.includes("404")) return window.alert("Please, insert an ID.")
         if(error.message.includes("500")) return window.alert("Invalid or out of range ID.")
      }
   }

   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id))
   }

   return (
      <div className='App'>
         {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout}/> : ""}

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