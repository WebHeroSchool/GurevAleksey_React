import React, {useState, useEffect} from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';
import '../Fonts/Fonts.css';

let App = () => {
  let [todoItems, setTodoItems]  = useState ([
    {
      id: 1,
      value : 'Задача 1',
      isDone: false
    },
    {
      id: 2,
      value :'Задача 2',
      isDone: false
    },
    {
      id: 3,
      value : 'Задача 3',
      isDone: false
    },
    {
      id: 4,
      value : 'Задача 4',
      isDone: false
    },
  ]);


  useEffect (() => {
    console.log ('Create')
  }, []);

  useEffect (() => {
    console.log ('Update')
  }, [todoItems]);

  let countTasks = todoItems.length;

  let onClickDone = id => setTodoItems(todoItems.map(item => {
      let newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem})
    );
  

  let onClickRemove = id => setTodoItems(todoItems.filter(item => item.id !== id)
  );

  let onClickAdd = value => {
    setTodoItems([
      ...todoItems,
      {
        value: value,
        isDone: false,
        id: countTasks + 1
      }
    ])
    };

  
  return (
    <section className = {styles.container}>
      <h1 className = {styles.title}>Задачи</h1>
        <InputItems
          TodoItems = { todoItems} 
          onClickAdd = {onClickAdd} 
        />
        <ItemList 
          TodoItems = { todoItems} 
          onClickDone = {onClickDone}
          onClickRemove = {onClickRemove}
        />
      <Footer countTasks = { countTasks } />
    </section>
  )
}

export default App;