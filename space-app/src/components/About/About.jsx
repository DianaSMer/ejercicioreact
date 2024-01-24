import React, {useState} from 'react';

function Astri(){
    const [mostrarParrafo, setMostrarParrafo] = useState(false);
    const handleClick = () => {
        setMostrarParrafo(!mostrarParrafo);
    };
    return(
        <div>
            <button onClick= {handleClick}> Mostrar info de esta tripulación</button>
            {mostrarParrafo && <p>Ellos son el Crew-7. Los astronautas Jasmin Moghbeli, de la NASA, Andreas Mogensen, de la ESA, Satoshi Furukawa, de la Agencia de Exploración Aeroespacial de Japón, Konstantin Borisov, de Roscosmos, Loral O'Hara y Nikolai Chub, se unen así la Expedición 69 </p>}
        </div>
    )
}

export default Astri;