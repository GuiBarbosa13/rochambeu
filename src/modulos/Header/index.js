import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    return (
        <>
        <header className="cabecalho-container">

            <div className="cabecalho">
                <GiHamburgerMenu fill="#fff" size={30} />
                <a href="/index.html">THE<br />ROCHAMBEU<br />CLUB<br /></a>
                <FaRegUser fill="#fff" size={25} />
            </div>
            <div className="cabecalho-infos">
                <span>CENTRE COURT TEMP 23℃</span> | <span>14:15:48 GMT+2</span>
            </div>
        </header>
        
        </>
    )
        
        
}

export default Header;