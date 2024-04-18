import './Mapa.css';


const Mapa = ({lista}) =>{
    return(
        <div className='mapa'>
            <div className='mapa-texto'>

                <h4>Club Map</h4>
                <ul>
                    {lista.map(lugar => <li key = {lugar}>{lugar}</li>)}
                </ul>
                
            </div>
            <img src='/mapa.webp' alt='imagem mapa do clube'/>
        </div>
    )
}

export default Mapa