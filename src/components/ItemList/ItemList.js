import React from 'react';
import PropTypes from 'prop-types';
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

ItemList.propTypes = {
  TodoItems: PropTypes.array.isRequired,
  onClickDone: PropTypes.func,
  onClickRemove: PropTypes.func 

};

export default ItemList;