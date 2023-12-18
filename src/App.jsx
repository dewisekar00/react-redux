import './App.css';
import FavoriteBook from './components/favoriteBook';
import AllBook from './components/AllBook';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
       <Link to="/all-book">All Book</Link>
   < AllBook />
   < FavoriteBook />
    
    </>
  );
}

export default App;
