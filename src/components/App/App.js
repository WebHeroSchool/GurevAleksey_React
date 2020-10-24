import React from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';
import '../Fonts/Fonts.css';


class App extends React.Component {
  state = {
    TodoItems: [
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
      }],
      Numbers: [ 3 ]
  };
  render() {
    return (
      <section className = {styles.container}>
    <h1 className = {styles.title}>Задачи</h1>
    <InputItems />
      <ItemList TodoItems = { this.state.TodoItems }/>
    <Footer count = { this.state.Numbers } />
  </section>
    )
  }
}

export default App;