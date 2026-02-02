import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">Savage Store</h1>
        <div className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Productos</a>
          <a href="#" className="nav-link">Categorías</a>
          <a href="#" className="nav-link">Contacto</a>
        </div>
      </div>
      <div className="nav-right">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;