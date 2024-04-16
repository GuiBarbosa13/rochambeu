import About from "./modulos/About";
import Header from "./modulos/Header";
import Mapa from "./modulos/Map";
import SectionCasa from "./modulos/SectionCasa";


const map = ["1 ... THE PANORAMIC SORBET LOUNGE", "2 ... CAR PARK", "3 ... CLUBHOUSE", "4 ... THE ORSON WELLES MEMORIAL GARDEN", "5 ... HE ALDO SWEET PIANO MEZZANINE", "6 ... GRASS COURTS", "7 ... CLAY COURTS", "8 ... CLUB SHOP & CAP MUSEUM", "9 ... SEASONAL CABANAS", "10 ... PEDALO SHUTTLE SERVICE", "11 ... SNORKELLING JETTY", "12 ... 18TH CENTURY ORANGERY & DANCE CLUB"]
function App() {
  return (
    <div className="App">
    <Header/>
    <SectionCasa />
    <About/>
    <Mapa lista = {map}/>
  
    </div>
  );
}

export default App;
