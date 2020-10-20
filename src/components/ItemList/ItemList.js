import React from 'react';
import Item from '../Item/Item';

let ItemList = ({ TodoItems }) => (<ul>
  {TodoItems.map(item => 
    <li key={item.value}><Item item = {item.value} /></li> )}
  </ul>
);

export default ItemList;