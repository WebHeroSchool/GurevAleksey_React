import React, { useLayoutEffect } from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

let TodoItems = ['Задача 1','Задача 2','Задача 3','Задача 4'];
let Numbers = 3;


let App = () => (
  <section>
    <h1>Дела:</h1>
    <InputItems />
      <ItemList TodoItems = { TodoItems }/>
    <Footer count = { Numbers } />
  </section>
);

export default App;