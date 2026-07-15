import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./TestimonialCard.css";

function TestimonialCard({ name, role, img, text, delay = 0 }) {
  return (
    <div className="testimonial-card hover-lift" data-aos="fade-up" data-aos-delay={delay}>
      <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <img src={img} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;