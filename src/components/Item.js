import React, { useState } from 'react';

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  const handleAddCart = () => setAddCart(!addCart);
  return (
    <li className={addCart ? 'add cart' : ''}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button className='add' onClick={handleAddCart}>
        {addCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
