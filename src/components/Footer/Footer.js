import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

let Footer = ({ countTasks,onClickAllDoneRemove,onClickFilterAll,onClickFilterNotDone,onClickFilterDone }) => (
  <footer className= {styles.footer}>
    <span className= {styles.tasks}> Задачи: { countTasks } </span>
    <ButtonGroup span className= {styles.button} size="small" variant="text">
      <Button style={{ textTransform: 'none' }}
        onClick = {()=> onClickFilterAll()}
      >Все</Button>
      <Button style={{ textTransform: 'none' }}
        onClick = {() => onClickFilterNotDone()}
      >Активные</Button>
      <Button style={{ textTransform: 'none' }}
       onClick= {() => onClickFilterDone()}
      >Готовые</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button style={{ textTransform: 'none' }}
        onClick = {()=> onClickAllDoneRemove()}
      >Удалить готовые</Button>
    </ButtonGroup>
  </footer>
);

Footer.propTypes = {
  countTasks: PropTypes.number.isRequired
};

export default Footer;