import React from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import '../App/App.css';

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
  <section className = 'container'>
    <h1>Дела:</h1>
    <InputItems />
      <ItemList TodoItems = { TodoItems }/>
    <Footer count = { Numbers } />
  </section>
);

export default App;