import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => 
        <ShoppingItem
          key={key}
          item={item}
        />  
      )}
    </ul>
  )
}

ShoppingList.defaultPropt = {
  items: []
}

export default ShoppingList;