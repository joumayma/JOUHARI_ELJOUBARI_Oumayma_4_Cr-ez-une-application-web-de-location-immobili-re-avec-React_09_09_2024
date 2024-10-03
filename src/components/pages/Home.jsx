import imgBanner from '../../assets/images/bannerHome-kasa.webp';
import Cards from "../Cards";


const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <img src={imgBanner} alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
        <Cards />
        </div>
    
      </div>
    );
  };
  
  export default Home;