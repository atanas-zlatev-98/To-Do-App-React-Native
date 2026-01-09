import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

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

    const newTodo = {
      text,
      isCompleted: false,
    }

    setTodos(oldTodos => [...oldTodos, newTodo]);
    setText('');
  }

  return (
    <View style={styles.body}>

      <View>
        <Text style={styles.heading}>Todo List</Text>
      </View>

      <View style={{flexDirection:'row',borderWidth:1,justifyContent:'space-between',width:"100%",borderRadius:5}}>
        <TextInput placeholder='Go to the gym' value={text} onChangeText={textChangeHandler}></TextInput>
        <Button title="Create" onPress={createTodoHandler}></Button>
      </View>

      <View>
        <Text>View</Text>
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