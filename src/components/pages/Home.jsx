import imgBanner from '../../assets/images/bannerHome-kasa.webp';
import Thumb from "../Thumb";
import livres from "../../Data/logements.json";
import Footer from '../Footer';

const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <img src={imgBanner} alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
        <Thumb livres={livres} />
        </div>
        <Footer />
    
      </div>
    );
  };
  
  export default Home;