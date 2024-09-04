import { useState } from 'react'
import './App.css'
import CategoryController from './components/CategoryController.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './components/product.jsx'


// Your app needs to go to a detail page /product/:id whenever you click on the product card
//  in the list. This should get the details from the endpoint: 
//  https://fakestoreapi.com/products/<id>. For now we won't add a navigation bar,
//   the browsers 'back' button will do the trick. 
//   TIP: You will need to add the react-router-dom package and add the routing to your app 
//   regardless.
// You need to deploy your app somewhere (using something like netlify) and put the link in your PR!
//  Make it a different one than the previous week.

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

{/* <>
<div>
  <h1>PRODUCTS</h1>
</div>
<div className='app'>
  <CategoryController
    selectedCategory={selectedCategory}
    handleCategoryClick={handleCategoryClick}
  />
</div>
</> */}

