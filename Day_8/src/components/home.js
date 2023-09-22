import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faListAlt,
  faShoppingBasket,
  faStar,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import './home.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">
            <FontAwesomeIcon icon={faShoppingBasket} />
            FreshMart
          </span>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faHome} /> */}
              Home
            </a>
          </li>
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faListAlt} /> */}
              Features
            </a>
          </li>
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faShoppingBasket} /> */}
              Products
            </a>
          </li>
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faStar} /> */}
              Categories
            </a>
          </li>
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faStar} /> */}
              Reviews
            </a>
          </li>
          <li>
            <a href="#">
              {/* <FontAwesomeIcon icon={faBlog} /> */}
              Blogs
            </a>
          </li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="banner">
        {/* Add your banner content here */}
        <h1>Welcome to Groco</h1>
        <p>Your one-stop shop for fresh and organic groceries.</p>
      </div>

      {/* Features */}
      <div className="features">
        {/* Three div boxes for Features */}
        <div className="feature-box">
          <h2>Fresh And Organic</h2>
          <p>Discover the freshest and most organic produce.</p>
        </div>
        <div className="feature-box">
          <h2>Free Delivery</h2>
          <p>Enjoy free and reliable delivery services.</p>
        </div>
        <div className="feature-box">
          <h2>Easy Payment</h2>
          <p>Convenient and secure payment options.</p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="product-categories">
        {/* Three div boxes for Product Categories */}
        <div className="category-box">
          <h2>Vegetables</h2>
          <p>Fresh and healthy vegetables for your family.</p>
        </div>
        <div className="category-box">
          <h2>Fresh Fruits</h2>
          <p>Delicious and nutritious fresh fruits.</p>
        </div>
        <div className="category-box">
          <h2>Dairy Products</h2>
          <p>Quality dairy products for your kitchen.</p>
        </div>
        <div className="category-box">
          <h2>Fresh Meat</h2>
          <p>Tender and juicy meat cuts for your meals.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Add your footer content here */}
        <p>&copy; 2023 Groco. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
