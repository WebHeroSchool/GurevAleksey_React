import React from 'react';
import styles from '../InputItems/InputItems.module.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class InputItems extends React.Component {
  state = {
    inputValue: '',
    inputError: false,
    helperText: ''
  };

  onButtonClick = () => {
    let flag = false;
    for (let items of this.props.TodoItems.values()) {
      if (items.value.indexOf(this.state.inputValue)=== 0) {
        flag = true
      }
    }

    if ((this.state.inputValue ==='') || (flag)) {
      this.setState({inputError:true})
      this.setState({helperText:'пустое поле'})
        if (flag) {
          this.setState({helperText:'Такая задача есть'})
        }
    }else {
      this.props.onClickAdd(this.state.inputValue);

      this.setState({
        inputValue:''
    });
    }
  }
  
  render() {
    return (
      <div>
        <div className={styles.container}>
          <TextField
            id="inputField" 
            error = {this.state.inputError}
            helperText = {this.state.helperText}
            // helperText="пустое поле"
            id="standard-basic" 
            label="Добавить задачу"
            fullWidth
            variant="outlined"
            value={this.state.inputValue}
            onChange={event => {
              this.setState({inputError:false})
              this.setState({helperText:''})
              this.setState({inputValue: event.target.value.toUpperCase()})}
            }
          />
        </div>
        <div className={styles.containerFab}>
          <Fab
            style={{ marginTop: 30}} 
            size="small" 
            color="primary" 
            aria-label="add"
            onClick={this.onButtonClick}
          >
            <AddIcon/>
          </Fab>
        </div>
      </div>
    );
  }
}

export default InputItems;