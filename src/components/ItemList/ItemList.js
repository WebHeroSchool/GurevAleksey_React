import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import classnames from 'classnames';
import image from '../Images/image.png';

let ItemList = ({ TodoItems, onClickDone, onClickRemove }) => (
  TodoItems === "" ?
  <div className = {styles.image}>
    <img src={image} alt='картинка'/>
    <p>Вы ещё не добавили ни одной задачи.</p>
  </div>:
  <ul className = {
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