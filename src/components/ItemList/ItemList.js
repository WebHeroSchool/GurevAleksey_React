import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import classnames from 'classnames';

let ItemList = ({ TodoItems }) => (<ul className = {
  classnames ({
    [styles.list]: true
  })
}>
  {TodoItems.map(item => 
    <li className={styles.li} key={item.value}><Item item = {item.value} isDone = {item.isDone} /></li> )}
  </ul>
);

export default ItemList;