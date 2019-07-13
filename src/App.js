import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Pic from "./Components/Pic";
import Action from "./Components/ActionBar";



// Funcion Principal
function App() {

  const [quote,setQuote] = useState({});
  

// Install Axios para realizar consulta
// Consulta a la API
const consultarAPI = async () =>{
  const resultado = await axios('https://got-quotes.herokuapp.com/quotes') ;

  // Actualizamos el State
  setQuote(resultado.data);
  
}
// useEffect (Component Update & Component Didmount)
  useEffect(
    ()=>{
      consultarAPI()
  },[]
);

console.log(quote);
    

  return (
    <div>
      <Pic 
        consulta = {quote}
       />
      <Action 
        metodo = {consultarAPI}
      />

    </div>
    

  )
}



export default App;
