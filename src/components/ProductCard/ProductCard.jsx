import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import "./ProductCard.css";

function ProductCard({ id, name, category, price, oldPrice, img, rating, delay = 0 }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id, name, price, img }, 1);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="product-card hover-lift" data-aos="fade-up" data-aos-delay={delay}>
      {oldPrice && <span className="product-badge">Sale</span>}

      <Link to={`/product/${id}`} className="product-img-wrap">
        <img src={img} alt={name} />
      </Link>

      <div className="product-info">
        {category && <span className="product-category">{category}</span>}

        <div className="product-rating">
          <FontAwesomeIcon icon={faStar} /> {rating}
        </div>

        <Link to={`/product/${id}`}>
          <h3>{name}</h3>
        </Link>

        <div className="product-price">
          <span className="price-current">${price}</span>
          {oldPrice && <span className="price-old">${oldPrice}</span>}
        </div>

        <button className="btn btn-primary btn-block hover-scale" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;