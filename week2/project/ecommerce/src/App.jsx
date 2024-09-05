import { useState } from 'react'
import './App.css'
import CategoryController from './components/CategoryController.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './components/product.jsx'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CategoryController selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />} />
        <Route path='/product/:id' element = { <Product />} />
      </Routes>
    </Router>
  )
}

export default App