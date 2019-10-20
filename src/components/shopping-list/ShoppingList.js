import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => 
        <ShoppingItem
          key={i}
          item={item}
        />  
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}

export default ShoppingList;