// src/components/common/Card/Card.jsx
import styles from './Card.module.css';

const Card = ({ children, className = '', onClick, ...props }) => {
  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={onClick}
      {...props} // Pass other props to the div
    >
      {children}
    </div>
  );
};

export default Card;