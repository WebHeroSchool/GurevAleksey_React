import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import classnames from 'classnames';

let ItemList = ({ TodoItems, onClickDone, onClickRemove }) => (<ul className = {
  classnames ({
    [styles.list]: true
  })
}>
  {TodoItems.map(item => 
    <li className={styles.li} key={item.id}>
      <Item 
      item = {item.value} 
      isDone = {item.isDone}
      id = {item.id} 
      onClickDone = {onClickDone}
      onClickRemove = {onClickRemove} 
      />
    </li> )}
  </ul>
);

export default ItemList;