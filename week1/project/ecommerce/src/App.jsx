import React,{ useState } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="App">
      <CategoryList
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} 
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
