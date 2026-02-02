function CartWidget() {
  const cartItemsCount = 3;
  
  return (
    <div className="cart-widget">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
        alt="Carrito de compras" 
        className="cart-icon"
        style={{ width: '30px', height: '30px' }}
      />
      {cartItemsCount > 0 && (
        <span className="cart-badge">{cartItemsCount}</span>
      )}
    </div>
  );
}

export default CartWidget;