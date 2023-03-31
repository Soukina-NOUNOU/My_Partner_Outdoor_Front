// == Import
// import { NotFound } from '../../pages/NotFound';
import './styles.css';
import Footer from '../../components/App/Footer';
import Events from '../../components/App/Events';

// == Composant
function Home() {
  return (
    <div className="home">
      <div className='search'>
        <div className='search__title'></div>
        <div className='search__bar'>
          <div className='search__bar__input'></div>
          <div className='search__bar__filter'></div> </div>
      </div>
      <div className='event'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
      <div className='pagination'></div>
      <Events />
      <Footer />
    </div>
  );
}

// == Export
export default Home;
