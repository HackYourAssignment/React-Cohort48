//week2/project/ecommerce/src/Routes.jsx
import {Routes, Route} from 'react-router-dom';
import {CategoryList} from "./CategoryList.jsx";
import {ProductList} from "./ProductList.jsx";
import {Product} from "./Product.jsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
}


