import React from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

let Footer = ({ count }) => (
  <footer className= {styles.footer}>
    <span className= {styles.tasks}> Задачи: { count } </span>
    <ButtonGroup span className= {styles.button} size="small" variant="text">
      <Button style={{ textTransform: 'none' }}>Все</Button>
      <Button style={{ textTransform: 'none' }}>Активные</Button>
      <Button style={{ textTransform: 'none' }}>Готовые</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button style={{ textTransform: 'none' }} >Удалить готовые</Button>
    </ButtonGroup>
    
  </footer>
);

Footer.defaultProps = {
  count: 0
};

export default Footer;