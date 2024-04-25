import './Mapa.css';


const Mapa = ({lista}) =>{
    return(
        <div className='mapa'>
            <h4 className='titulo'>Club Map</h4>
            <div className='mapa-container'>
                <div className='mapa-texto'>
                    <h4 className='titulo-lg'>Club Map</h4>
                    <ul>
                        {lista.map(lugar => <li key = {lugar}>{lugar}</li>)}
                    </ul>
                </div>
                <img src='/mapa.webp' alt='imagem mapa do clube'/>
            </div>
            
        </div>
    )
}

export default Mapa