import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import TodoItem from './components/TodoItem';

export default function App() {

  const [text,setText] = useState('');
  const [todos,setTodos] = useState([]);

  const textChangeHandler = (value) =>{
    setText(value);
  } 

  const createTodoHandler = () =>{

    if(!text){
      return alert('Misssing Todo Text!');
    }

    const lastTodoId = todos[todos.length - 1]?.id || 0;

    const newTodo = {
      id:lastTodoId + 1,
      text,
      isCompleted: false,
    }

    setTodos(oldTodos => [...oldTodos, newTodo]);
    setText('');
  }

  const toggleTodoHandler = (todoId) => {
   setTodos(todos => todos.map(todo => todo.id === todoId ? {...todo,isCompleted:!todo.isCompleted}: todo))
  }

  return (
    <View style={styles.body}>

      <View>
        <Text style={styles.heading}>Todo List</Text>
      </View>

      <View style={{flexDirection:'row',borderWidth:1,justifyContent:'space-between',width:"100%",borderRadius:5}}>
        <TextInput placeholder='Go to the gym' value={text} onChangeText={textChangeHandler} onSubmitEditing={createTodoHandler}></TextInput>
        <Button title="Create" onPress={createTodoHandler} ></Button>
      </View>

      <View style={{width:'100%'}}>
        <Text>
          {todos.map(todo => <TodoItem key={todo.id} {...todo} onDone={toggleTodoHandler}></TodoItem>)}
        </Text>
      </View>
    </View>
  );
}


const styles = {
  body: {
    padding:20,
    alignItems:'center',
    gap:30
  },
  heading:{
    fontSize:30,
    marginTop:20,
    fontWeight:'bold'
  },
}