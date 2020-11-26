import React from 'react';
import '../Fonts/Fonts.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css'
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class Item extends React.Component {

  render() {
   let { item, isDone, id, onClickDone, onClickRemove } = this.props;

    return (
      <div className = {styles.container}>
        <Switch
          color="primary"
          name="checkedB"
          checked={isDone}
          onClick = {() => onClickDone(id)}
        />

        <textarea disabled  className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
          }>{ item }
        </textarea >
        
        <IconButton style={{ padding: 7}} aria-label="delete"
          onClick = {() => onClickRemove(id)} 
        >
          <DeleteIcon/>
        </IconButton>  
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  onClickDone: PropTypes.func,
  onClickRemove: PropTypes.func 
}

export default Item;