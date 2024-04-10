import "./SectionCasa.css";
import { FaChevronDown } from "react-icons/fa";

const SectionCasa = () =>{
    return(
        <div className="casa">
            <img src="/casinha.webp" alt="casarão rochambeu"/>
            <p>THE HOME OF RACQUET ROSÉ</p>
            <a href="#">
                <FaChevronDown fill="#fff" size={32} className="seta"/>
            </a>
            
            
        </div>
    )
}

export default SectionCasa;