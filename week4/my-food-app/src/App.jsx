import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites'; 
import MealDetails from './components/MealDetails';
import { AppProvider } from './Context/AppContext';
import './assets/styles/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <AppProvider>
      <Router>
        <div>
          <Header  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/meal/:idMeal" element={<MealDetails />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
