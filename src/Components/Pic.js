import React from 'react';
import bronn from '../Assets/bronn.png';
import thehound from '../Assets/TheHound.png';
import tyron from '../Assets/Tyron.png';
import varys from '../Assets/Varys.png';
import quotesymbol from  '../Assets/quotesymbol.png';
import Littlefinger from  '../Assets/littlefinger.png';
import olennatyrel from '../Assets/olennaTyrel.png';
import Jaimelannister from '../Assets/JaimeLannister.png';
import cerseiandtyron from '../Assets/cerseiandtyron.png';
import brann from '../Assets/brann.png';
import sansa from '../Assets/sansa.png';
import cerseilannister from '../Assets/cerseilannister.png';
import rodrik from '../Assets/rodrik.png';
import jonsnow from '../Assets/jonsnow.png';
import samwell from '../Assets/samwell.png';
import brindeytully from '../Assets/brindeytully.png';
import daenerys from '../Assets/daenerys.png';
import davos from '../Assets/davos.png';
import renly from '../Assets/renly.png';
import victareon from '../Assets/Victareon.png';
import nopic from '../Assets/nopic.png';
import quaithe from '../Assets/quaithe.png'
import alayne from '../Assets/alayne.png'





// La funcion pic recibe el objeto consulta, se hace un diccionario con cada key que debe hacer match con el string que viene del objeto.


function Pic ({consulta}) {
    var diccionario = {
        'Sansa':sansa,
        'Tyrion':tyron,
        'The Hound':thehound,
        'Bronn':bronn,
        'Varys':varys,
        'Littlefinger':Littlefinger,
        'Olenna Tyrell': olennatyrel,
        'Jaime Lannister': Jaimelannister,
        'Cersei and Tyron': cerseiandtyron,
        'Bran':brann,
        'Cersei Lannister': cerseilannister,
        'Lord Rodrik':rodrik,
        'The Discarded Knight':nopic,
        'Jon Snow':jonsnow,
        'Samwell':samwell,
        'Brynden Tully': brindeytully,
        'Cersei and Tyrion': cerseiandtyron,
        'Daenerys':daenerys,
        'Davos': davos,
        'Renly Baratheon': renly,
        'Victarion Greyjoy': victareon,
        'Quaithe':quaithe,
        'Alayne':alayne        
    };
    // Se inicializa un array vacio "personaje" y se hace push del valor de la key del diccionario en respectivo caso. personaje sera usado en el retorn para mostrar la imagen
    let personaje= [];
    personaje.push(diccionario[consulta.character]);
    


// Version anterior del script usando switch
      /*let personaje = [];
    switch (consulta.character){
        case 'Tyrion':
        personaje.push(tyron);
        break;
        case 'The Hound':
        personaje.push(thehound);
        break;
        case 'Bronn':
        personaje.push(bronn);
        break;
        case 'Varys':
        personaje.push(varys);
        break;
        case 'Littlefinger':
        personaje.push(Littlefinger);
        break;
        case 'Olenna Tyrell':
        personaje.push(olennatyrel);
        break;
        case 'Jaime Lannister':
        personaje.push(Jaimelannister);
        break;
        case 'Cersei and Tyron':
        personaje.push(cerseiandtyron);
        break;
        case 'Bran':
        personaje.push(brann);
        break;
        case 'Sansa':
        personaje.push(sansa);
        break;
        case 'Cersei Lannister':
        personaje.push(cerseilannister);
        break;
        default: 
        
    }
    */
       
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
                    <div className = "wrapper">
                        <img src = {quotesymbol} alt= ""/>
                    </div>
                </div>
                <div className = "col-8">
                    <p>{consulta.quote}}</p>
                    
                </div>
                <div className = "col-4 offset-8 ">
                    <h4>{consulta.character}</h4>
                 </div>
            
        

            </div>
    </div>
    )
}


export default Pic;