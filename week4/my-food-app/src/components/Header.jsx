import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.jpg';
import '../assets/styles/style.css';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };
 
  return (
    <header className="app-header">
      <img src={logo} alt="Food App Logo" className="app-logo" />
      <h1 className="logo">Food App</h1>
      <nav className="nav-menu">
        <button className="nav-button" onClick={handleHomeClick}>Home</button>
        <button className="nav-button" onClick={handleFavoritesClick}>Favorites</button>
      </nav>
    </header>
  );
}

export default Header;
