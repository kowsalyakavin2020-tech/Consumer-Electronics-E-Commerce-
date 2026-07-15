import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faTruck,
  faLock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import product01 from "../../assets/images/products/product-01.webp";
import product02 from "../../assets/images/products/product-02.webp";
import product03 from "../../assets/images/products/product-03.webp";

import "./Checkout.css";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("ZIP code is required"),
  paymentMethod: yup.string().required("Select a payment method"),
});

const orderItems = [
  { id: 1, name: "Wireless Earbuds Pro", price: 49.99, img: product01, qty: 1 },
  { id: 2, name: "Smart Watch Series X", price: 89.99, img: product02, qty: 2 },
  { id: 3, name: "Bluetooth Speaker Max", price: 34.99, img: product03, qty: 1 },
];

function Checkout() {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 1000));
    setOrderPlaced(true);
    toast.success(`Thank you ${data.fullName}, your order has been placed!`);
    setTimeout(() => navigate("/"), 2500);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-icon">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. A confirmation email has been sent to you.</p>
        <p className="redirect-note">Redirecting to homepage...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <section className="checkout-header">
        <div className="container">
          <span className="section-tag" data-aos="fade-up">Checkout</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Complete Your Order</h1>
        </div>
      </section>

      <section className="section checkout-section">
        <form onSubmit={handleSubmit(onSubmit)} className="container checkout-layout">
          <div className="checkout-form-wrap" data-aos="fade-up">
            <div className="checkout-block">
              <h3><FontAwesomeIcon icon={faTruck} /> Shipping Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" {...register("fullName")} />
                  {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" {...register("email")} />
                  {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" {...register("phone")} />
                {errors.phone && <span className="error-text">{errors.phone.message}</span>}
              </div>

              <div className="form-group">
                <label>Street Address</label>
                <input type="text" placeholder="123 Tech Street" {...register("address")} />
                {errors.address && <span className="error-text">{errors.address.message}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="Chennai" {...register("city")} />
                  {errors.city && <span className="error-text">{errors.city.message}</span>}
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input type="text" placeholder="600001" {...register("zip")} />
                  {errors.zip && <span className="error-text">{errors.zip.message}</span>}
                </div>
              </div>
            </div>

            <div className="checkout-block">
              <h3><FontAwesomeIcon icon={faCreditCard} /> Payment Method</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" value="card" {...register("paymentMethod")} />
                  <span>Credit / Debit Card</span>
                </label>
                <label className="payment-option">
                  <input type="radio" value="upi" {...register("paymentMethod")} />
                  <span>UPI</span>
                </label>
                <label className="payment-option">
                  <input type="radio" value="cod" {...register("paymentMethod")} />
                  <span>Cash on Delivery</span>
                </label>
              </div>
              {errors.paymentMethod && <span className="error-text">{errors.paymentMethod.message}</span>}
            </div>
          </div>

          <div className="checkout-summary" data-aos="fade-up">
            <h3>Order Summary</h3>

            <div className="checkout-items">
              {orderItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>Qty: {item.qty}</span>
                  </div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button type="submit" className="btn btn-primary btn-block hover-lift" disabled={isSubmitting}>
              <FontAwesomeIcon icon={faLock} /> {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>

            <p className="secure-note">
              <FontAwesomeIcon icon={faLock} /> Your payment info is securely encrypted
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Checkout;