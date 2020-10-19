import React from 'react';
import Item from '../Item/Item';

let ItemList = ({ TodoItems }) => (
  <ul>
    <li><Item TodoItem = {TodoItems[0]} /></li>
    <li><Item TodoItem = {TodoItems[1]}/></li>
    <li><Item TodoItem = {TodoItems[2]}/></li>
    <li><Item TodoItem = {TodoItems[3]}/></li>
  </ul>
);

export default ItemList;