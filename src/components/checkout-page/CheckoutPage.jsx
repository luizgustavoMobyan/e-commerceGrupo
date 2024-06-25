/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(10); // Valor da entrega fixo
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedItems) {
      setCartItems(savedItems);
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleAddQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleSubtractQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    if (updatedCartItems[index].quantity === 0) {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleApplyPromoCode = () => {
    // Lógica para aplicar o código promocional
    if (promoCode === 'DESCONTO10') {
      setDiscount(10); // Exemplo de desconto fixo
    } else {
      setDiscount(0);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee - discount;
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-items">
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <div><img src="https://img.freepik.com/vetores-gratis/conjunto-de-icones-plana-de-doces-e-bolos_74855-5939.jpg" alt="" /></div>
              {/* <div><img src={item.imageUrl} alt={item.imageUrl} /></div> */}
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div className="item-count-controls">
                <button className="item-count-button" onClick={() => handleSubtractQuantity(index)}>-</button>
                <div className="item-count-display">{item.quantity}</div>
                <button className="item-count-button" onClick={() => handleAddQuantity(index)}>+</button>
              </div>
              <button className="item-removed-button" onClick={() => handleRemoveItem(index)}>Remover</button>
            </div>
          ))}
          {cartItems.length === 0 && <p>Carrinho vazio</p>}
        </div>

        <div className="checkout-summary">
          <h3>Resumo do Pedido</h3>
          <div className="summary-details">
            {/* <div>Subtotal: R$ {calculateSubtotal().toFixed(2)}</div> */}
            <div>Valor da Entrega: R$ {deliveryFee.toFixed(2)}</div>
            <div>
              <label>
                Código Promocional:
                <input className="cupom-desconto"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </label>
              <button className="cupom-button" onClick={handleApplyPromoCode}>Inserir</button>
            </div>
            <div>Desconto: R$ {discount.toFixed(2)}</div>
            {/* <div>Total: R$ 0.00</div> */}
            <div>Total: R$ {calculateTotal().toFixed(2)}</div>
          </div>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;