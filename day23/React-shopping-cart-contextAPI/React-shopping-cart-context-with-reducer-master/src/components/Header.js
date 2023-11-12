import { FaShoppingCart } from "react-icons/fa";

import {
  Badge,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shopping Cart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>          
        </li>
      </ul>
    </div>
    <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              
              <Badge>Cart {cart.length}</Badge>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
  </div>
 
</nav>
<div className="banner">
    <h1>Shop in Style</h1>
    <p>With this shop hamepage template</p>
  </div>

    
    </>
  );
};

export default Header;
