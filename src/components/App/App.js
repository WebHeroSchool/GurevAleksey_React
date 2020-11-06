import {MenuItem, MenuList} from '@material-ui/core';
import React from 'react';
import '../Fonts/Fonts.css';

import Todo from '../Todo/Todo'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'

import styles from '../App/App.module.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <MenuList>
            <Link to='/' className={styles.link}>
              <MenuItem style={{ fontSize: 20}}>Обо мне</MenuItem>
            </Link>
            <Link to='/todo' className={styles.link}>
              <MenuItem style={{ fontSize: 20}}>Дела</MenuItem>
            </Link>
            <Link to='/contacts' className={styles.link}>
              <MenuItem style={{ fontSize: 20}}>Контакты</MenuItem>
            </Link>
          </MenuList>
        </div>

        <div className={styles.content}>
          <Route path='/' exact component={About}/>
          <Route path='/todo' component={Todo}/>
          <Route path='/contacts' component={Contacts}/>
        </div>
      </div>
    </Router>
  )
}

export default App;