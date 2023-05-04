import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';

function App() {
   
   const [characters, setCharacters] = useState([])

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
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
