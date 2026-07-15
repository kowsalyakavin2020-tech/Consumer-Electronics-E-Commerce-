import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CategoryCard.css";

function CategoryCard({ name, img, icon, delay = 0 }) {
  return (
    <Link
      to="/shop"
      className="category-card hover-lift"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="category-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <img src={img} alt={name} className="category-img" />
      <h3>{name}</h3>
    </Link>
  );
}

export default CategoryCard;