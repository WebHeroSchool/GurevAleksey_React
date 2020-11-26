import React from 'react';
import '../Fonts/Fonts.css';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from '../App/App.module.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


let App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.sidebar}>
            <NavLink exact to='/' activeClassName={styles.activLink} className={styles.link}>
              Обо мне
            </NavLink>
            <NavLink to='/todo' activeClassName={styles.activLink} className={styles.link}>
              Дела
            </NavLink>
        </div>

        <div className={styles.content}>
          <Route path='/' exact component={About}/>
          <Route path='/todo' component={Todo}/>
        </div>
      </div>
    </Router>
  )
}

export default App;