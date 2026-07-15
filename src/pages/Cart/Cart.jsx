import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus, faArrowRight, faCartShopping, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQty, removeFromCart } = useCart();

  const removeItem = (id, name) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <FontAwesomeIcon icon={faCartShopping} className="cart-empty-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="btn btn-primary hover-lift">
          Start Shopping <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <section className="cart-header">
        <div className="container">
          <span className="section-tag" data-aos="fade-up">Your Cart</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Shopping Cart</h1>
        </div>
      </section>

      <section className="section cart-section">
        <div className="container cart-layout">
          <div className="cart-items" data-aos="fade-up">
            <div className="cart-items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-product">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
                <div className="cart-item-price" data-label="Price">${item.price}</div>
                <div className="cart-item-qty" data-label="Quantity">
                  <button onClick={() => updateQty(item.id, -1)} aria-label="Decrease">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} aria-label="Increase">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="cart-item-total" data-label="Total">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id, item.name)}
                  aria-label="Remove item"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}

            <Link to="/shop" className="continue-shopping">
  <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
</Link>
          </div>

          <div className="cart-summary" data-aos="fade-up">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="shipping-note">Add ${(50 - subtotal).toFixed(2)} more for free shipping</p>
            )}
            <div className="summary-divider"></div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-block hover-lift">
              Proceed to Checkout <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;