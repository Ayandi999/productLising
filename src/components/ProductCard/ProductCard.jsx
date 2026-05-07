import { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  title, 
  description, 
  price, 
  discountPercentage, 
  rating, 
  brand, 
  category, 
  images = [] 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-loop through images if there are multiple
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className={`product-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="product-category-badge">{category}</div>
        <div className="product-discount-badge">-{Math.round(discountPercentage)}%</div>
      </div>

      <div className="product-details">
        <div className="product-brand">{brand}</div>
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-rating">
          <span className="star">★</span>
          <span className="rating-value">{rating}</span>
        </div>

        <div className="product-price-row">
          <div className="price-group">
            <span className="original-price">${price}</span>
            <span className="current-price">${discountedPrice}</span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
