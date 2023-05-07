import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "./components/About/About"
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Error404 from "./components/Error404/Error404"
import Nav from './components/Nav/Nav';

function App() {
   const [characters, setCharacters] = useState([]) //estado inicial []
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if(data.name && !characters.find((char) => char.id === data.id)){
         setCharacters((oldChars) => [...oldChars, data]);
      } else if(characters.find((char) => char.id === data.id)){
         window.alert(`Character ID: ${id} already exists!`)
      } else {
         window.alert('¡Whoops! Unexisten ID.');
      }
   });
   }
   
   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>

         <Routes>
            <Route path="/*" element={<Error404 />} />
            <Route path="" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;