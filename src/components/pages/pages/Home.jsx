import imgBanner from '../../../assets/images/bannerHome-kasa.webp';
import Thumb from "../../../components/Thumb";
import livres from "../../../Data/logements.json";

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
    
      </div>
    );
  };
  
  export default Home;