import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css'

let Item = ({ item, isDone }) => (
<p className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>{ item }</p>
);

export default Item;