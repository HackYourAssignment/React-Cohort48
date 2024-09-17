//week3/project/ecommerce/src/components/NavigationBar.jsx
import {Link} from 'react-router-dom';

export const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};
