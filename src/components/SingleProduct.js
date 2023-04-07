import React, { useState } from 'react';
import '../styles.css'

const SingleProduct = ({product, selectedProducts, setSelectedProducts}) => {
  const { id, name, sku, price, product_type, size, width, length, weight, height } = product;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      setSelectedProducts(selectedProducts.filter(productId => productId !== id));
    }
  }

  return (
    <div className='cards'>
      <input 
        className='delete-checkbox'
        type="checkbox" 
        id={`product-${id}`} 
        name={`product-${id}`} 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div>{name}</div>
      <div>{sku}</div>
      <div>{price}</div>
      <div>{product_type}</div>
      {product_type === 'dvd' &&
        <div>Size: {size} MB</div>
      }
      {product_type === 'book' &&
        <div>Weight: {weight} Kg</div>
      }
      {product_type === 'furniture' &&
        <div>Dimensions: {width + 'x' + length + 'x' + height}</div>
      }
    </div>
  );
};

export default SingleProduct;
