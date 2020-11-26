import React from 'react';
import InputItems from '../InputItems/InputItems';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from '../Todo/Todo.module.css';
import '../Fonts/Fonts.css';

class Todo extends React.Component {
  state = {
    todoItems:[
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
    sort : 'all',
    countTasks : 4,

  };

  onClickDone = id => {
    let newItemList = this.state.todoItems.map(item => {
      let newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem});
      this.setState({todoItems: newItemList});
    }  

  onClickRemove = id => {
    let newItemList = this.state.todoItems.filter(item => item.id !== id);
    this.setState({todoItems: newItemList});
    this.setState(state=>({countTasks: state.countTasks - 1}));
  }  

  onClickAdd = value => {
    this.setState(state => ({
      todoItems: [
        ...state.todoItems,
        {
          value,
          isDone: false,
          id: state.countTasks + 1,
        },
      ],
      countTasks: state.countTasks + 1,
    }));
  }
  
  onClickAllDoneRemove = () => {
    let newItemList = this.state.todoItems.filter(item => item.isDone !== true);
    this.setState({todoItems: newItemList,countTasks: newItemList.length});
  }  
   

  getItem = () => {
    let itemsSort;
    switch (this.state.sort) {
      case 'notDone' :
        itemsSort = this.state.todoItems.filter(item => item.isDone !== true)
        break;
      case 'done' :
        itemsSort= this.state.todoItems.filter(item => item.isDone === true)
        break;
      case 'all' :
        itemsSort = this.state.todoItems
        break;
      default:
        itemsSort = this.state.todoItems
        break;  
      }
    return itemsSort
  } 

  onClickFilterAll = () => {
    this.setState({sort : 'all'});
  };
  
  onClickFilterDone = () => {
    this.setState({sort : 'done'});
  };
  
  onClickFilterNotDone = () => {
    this.setState({sort : 'notDone'});
  };

  render() {
    let itemsSort = this.getItem();
    let countTasksSort = itemsSort.length;
    return (
      <section className = {styles.container}>
        <h1 className = {styles.title}>Задачи</h1>
          <InputItems
            TodoItems = {this.state.todoItems} 
            onClickAdd = {this.onClickAdd} 
          />
          <ItemList 
            TodoItems = {itemsSort} 
            onClickDone = {this.onClickDone}
            onClickRemove = {this.onClickRemove}
          />
        <Footer 
          countTasks = { countTasksSort }
          onClickAllDoneRemove = { this.onClickAllDoneRemove }
          onClickFilterAll = { this.onClickFilterAll }
          onClickFilterNotDone = { this.onClickFilterNotDone }
          onClickFilterDone = { this.onClickFilterDone }
        />
      </section>
    )
  }  
}

export default Todo;