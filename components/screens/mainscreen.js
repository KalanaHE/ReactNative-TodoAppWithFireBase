import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import firebase from '../../fb';

function Todo() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const db = firebase.database().ref();

  useEffect(() => {
    return db.on('value', (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push({doc});
      });
      console.log(list);
      setTodos(list);
    });
  }, []);

  function addTask() {
    db.push({
      title: task,
      description: description,
      completed: false,
    });
    setTask('');
    setDescription('');
  }

  return (
    <View>
      <Appbar>
        <Appbar.Content title={'Tasks App'} />
      </Appbar>
      {/* <FlatList
        style={{flex: 1, width: '100%'}}
        data={todos}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <Todo />}
      /> */}
      <TextInput label={'New task'} value={task} onChangeText={setTask} />
      <TextInput
        label={'Description'}
        value={description}
        onChangeText={setDescription}
      />
      <Button
        onPress={() => {
          addTask();
        }}>
        Add Task
      </Button>
    </View>
  );
}

export default Todo;
