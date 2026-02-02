function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>Tienda de ropa urbana con las mejores marcas</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@savage.com</p>
          <p>Teléfono: +56 9 1234 5678</p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © {currentYear} Savage Tienda Online - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;