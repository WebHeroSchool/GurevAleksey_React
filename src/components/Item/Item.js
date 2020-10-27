import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css'
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

let Item = ({ item, isDone, id, onClickDone, onClickRemove }) => (
<div className = {styles.container}>
  <Switch
    // checked={state.checkedB}
    // onChange={handleChange}
    color="primary"
    name="checkedB"
    onClick = {() => onClickDone(id)}
  />

  <p className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
    }>{ item }
  </p>
  
  <IconButton style={{ padding: 7}} aria-label="delete"
    onClick = {() => onClickRemove(id)} 
  >
    <DeleteIcon/>
  </IconButton>  
</div>
);

Item.defaultProps = {
  isDone: false
}

export default Item;