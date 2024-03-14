import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoFlowerSharp } from "react-icons/io5";


const Header = ({cart})=>{

  // // toggleOpen = ()=>{
  // //   this.setState({
  // //     isOpen:!this.state.isOpen
  // onClick={this.toggleOpen}
  // //   })
  // // }

 return(
  <div>
 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown" > 
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li>
      </ul>
      </div>
      <div>
      <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"> <FaShoppingCart /> Cart  <span className="badge bg-dark text-white">{cart.reduce((total, item) => total + item.quantity, 0)}</span> </button>
      </div>
</nav>
<div className="jumbotron jumbotron-fluid text-light bg-dark py-5">
  <div className="container">
    <h1 className="display-4 text-center fw-bold">Flower Factory<IoFlowerSharp /></h1>
    <p className="lead text-center">Have a Blooming Day !</p>
  </div>
</div>
  </div>
     
 );
};

export default Header