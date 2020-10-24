import React from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';
import '../Fonts/Fonts.css';

let TodoItems = [
  {
    value : 'Задача 1',
    isDone: true
  },
  {
    value :'Задача 2',
    isDone: false
  },
  {
    value : 'Задача 3',
    isDone: false
  },
  {
    value : 'Задача 4',
    isDone: true
  }];
let Numbers = 3;


let App = () => (
  <section className = {styles.container}>
    <h1 className = {styles.title}>Задачи</h1>
    <InputItems />
      <ItemList TodoItems = { TodoItems }/>
    <Footer count = { Numbers } />
  </section>
);

export default App;