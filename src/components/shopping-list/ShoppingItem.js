import React from 'react';

function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{textDecoration: props.item.checked ? 'line-through' : null,}}>
        {props.item.name}
      </h2>
      <button>check</button>
      <button>delete</button>
    </li>
  )
}

ShoppingItem.defaultProps = {
  item: {},
}

export default ShoppingItem;