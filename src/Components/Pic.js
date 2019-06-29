import React from 'react';
import pupu from '../Assets/bronn.png';
import quotesymbol from  '../Assets/quotesymbol.png';




// la cosa quedo asi, todo esta listo para cargar todas las imagenes y terminar todos los cases.


function Pic ({consulta}) {

//console.log(consulta);
    //let Bronn = bronn;


    let personaje = [];
    switch (consulta.character){
        case 'Tyrion':
        personaje.push(pupu);
        break;
        default: 
        
    }


    return(
        <div className= "container">
            <div className = "row">
                <div className = "col-12 centered">
                    <h1>Game Of Thrones</h1>
                    <h2>QUOTES</h2>
                </div>
                <div className = "col-3">
                    <img src={personaje} alt=""  />
                </div>
                <div className= "col-1">
                    <img src = {quotesymbol} alt= ""/>
                </div>
                <div className = "col-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                    
                </div>
                <div className = "col-2 offset-10 ">
                    <h4>Character</h4>
                 </div>
            
        

            </div>
    </div>
    )
}


export default Pic;