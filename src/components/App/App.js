import React from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';
import '../Fonts/Fonts.css';

let TodoItems = [
  {
    value : 'Задача 1'
  },
  {
    value :'Задача 2'
  },
  {
    value : 'Задача 3'
  },
  {
    value : 'Задача 4'
  }];
let Numbers = 3;


let App = () => (
  <section className = {styles.container}>
    <h1 className = {styles.title}>To DO:</h1>
    <InputItems />
      <ItemList TodoItems = { TodoItems }/>
    <Footer count = { Numbers } />
  </section>
);

export default App;