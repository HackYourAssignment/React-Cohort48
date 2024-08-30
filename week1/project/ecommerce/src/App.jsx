import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
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
