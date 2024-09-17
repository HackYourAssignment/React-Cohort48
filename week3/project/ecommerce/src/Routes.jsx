//week3/project/ecommerce/src/Routes.jsx
import {Routes, Route} from 'react-router-dom';
import {CategoryList} from "./components/CategoryList.jsx";
import {ProductList} from "./components/ProductList.jsx";
import {Product} from "./components/Product.jsx";
import {FavoritesProvider} from "./context/FavoritesContext.jsx";
import {NavigationBar} from "./components/NavigationBar.jsx";
import {FavoritesList} from  "./components/FavoritesList.jsx"


export const AppRoutes = () => {
    return (
        <FavoritesProvider>
            <NavigationBar/>

            <Routes>
                <Route path="/" element={<CategoryList />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/favorites" element={<FavoritesList />} />
            </Routes>
        </FavoritesProvider>
    );
}


