import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Product Card</h1>
      <p>This is a product card.</p>
      <AddToCart />
    </div>
  )
}

export default ProductCard