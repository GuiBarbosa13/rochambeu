import './About.css';

const About = () =>{
    return (
        <section>
            <div className='section-container'>
                <div className='img'>
                    <img src='/tenista.webp'/>
                </div>
                <div className='txt'>
                    <p>
                        The Rochambeau Sports and Racquet Club is a prestigious but welcoming members-only institution located in the Provence-Alpes-Côte d'Azur region of the French Riviera.
                    </p>
                    <p>
                        The tennis here is of a good standard (indeed, we are proud to have sent three ball boys to Roland Garros, and Andre Agassi once smoked in the plunge pool). But Rochambeau members find as much to enjoy off the court as on it.
                    </p>
                    <p><i>
                        Note: Due to high demand and Antoine's ongoing elbow issue, there is currently a significant backlog of membership applications.
                    </i></p>

                    <h3>LEARN MORE ABOUT MEMBERSHIP</h3>

                    <input type='email' placeholder='ENTER E MAIL'/>
                </div>
                
            </div>
        </section>
    )
}

export default About;