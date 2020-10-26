import React from 'react';
import styles from '../InputItems/InputItems.module.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

let InputItems = () => (
  <div>
    <div className={styles.container}>
      <TextField 
        id="standard-basic" 
        label="Добавить задачу"
        fullWidth
        variant="outlined"
      />
    </div>
    <div className={styles.containerFab}>
      <Fab
        style={{ marginTop: 30}} 
        size="small" 
        color="primary" 
        aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  </div>
);

export default InputItems;