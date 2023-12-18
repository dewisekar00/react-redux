import './App.css';
import FavoriteBook from './components/favoriteBook';
import AllBook from './components/AllBook';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
     
 < BrowserRouter>
 < Link to="/favorite-book">Favorite</Link>
 <Routes>
  <Route path='/all-book' element={ <AllBook/>}/>
  < Route path='/favorite-book' element={< FavoriteBook/>} />
 </Routes>
 </BrowserRouter>
    
    </>
  );
}

export default App;
