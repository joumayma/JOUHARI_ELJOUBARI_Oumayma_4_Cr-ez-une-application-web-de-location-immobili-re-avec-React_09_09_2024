import imgBanner from '../../../assets/images/bannerHome-kasa.webp';

const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <img src={imgBanner} alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs</h1>
        </div>
    
      </div>
    );
  };
  
  export default Home;