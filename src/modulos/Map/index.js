import './Mapa.css';


const Mapa = ({lista}) =>{
    return(
        <div>
            <div className='mapa-texto'>

                <h4>Club Map</h4>
                <hr/>
                <ul>
                    {lista.map(lugar => <li key = {lugar}>{lugar}</li>)}
                </ul>

            </div>
            
        </div>
    )
}

export default Mapa