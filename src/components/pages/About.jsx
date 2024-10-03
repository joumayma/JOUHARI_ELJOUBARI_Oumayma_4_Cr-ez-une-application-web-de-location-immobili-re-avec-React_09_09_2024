import imgBanner from '../../assets/images/about-background.png';
import AboutCollapse from './AboutCollapse';



const About = () => {
    return (
        <section className='about'>
          <div className='banner'>
          <img src={imgBanner} alt="Chez vous, partout et ailleurs" />
          <AboutCollapse /> {/* Ajoute ici le composant AboutCollapse */}

          </div>
        </section>
    )
}
export  default About;