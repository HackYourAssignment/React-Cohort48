import React from 'react';
import { BrowserRouter as Router, Route, Routes ,  Link } from 'react-router-dom';
import './styles/App.css';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import FavouritesPage from './component/FavouritesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context/context';




function App() {
  return (
    <Provider>
      <Router>
        <div>
          <nav className="nav-links">
          <Link to="/">Home</Link>{'|'}
            <Link to="/favourites">Favourites</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
