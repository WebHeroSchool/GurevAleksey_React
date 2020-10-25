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
      }],
      Numbers: [ 3 ]
  };

  onClickDone = id => {
    let newItemList = this.state.TodoItems.map(item => {
      let newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({TodoItems : newItemList});
  };
  
  render() {
    return (
      <section className = {styles.container}>
    <h1 className = {styles.title}>Задачи</h1>
    <InputItems />
      <ItemList TodoItems = { this.state.TodoItems} onClickDone={this.onClickDone}/>
    <Footer count = { this.state.Numbers } />
  </section>
    )
  }
}

export default App;