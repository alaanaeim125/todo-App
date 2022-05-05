import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import styles from './ToDo.styles';

import {
  useColorScheme,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();

  const [todosKeys, setTodosKeys] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  let todosDB = database().ref('/todos');
  const isDarkMode = useColorScheme() === 'dark';

  let addItem = () => {
    if (!task || task.length === 0) {
      alert('Please enter a task');
      return;
    }

    todosDB.push({
      taskName: task,
    });

    setModalVisible(!modalVisible);
    setTask();
  };

  let removeTodo = async todosId => {
    await database().ref(`/todos/${todosId}`).remove();
  };

  useEffect(() => {
    todosDB.on('value', snapshot => {
      let data = snapshot ? snapshot.val() : [];
      const todosValues = data ? Object.values(data) : [];
      const todosKeys = data ? Object.keys(data) : [];
      setTodos(todosValues);
      setTodosKeys(todosKeys);
    });
  }, []);

  return (
    <View style={{flex: 1, paddingBottom: 80}}>
      <View>
        <Text style={styles.title}>Today's Tasks</Text>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <View key={todosKeys[index]} style={styles.todo}>
                <Text style={styles.titleTodo}>{item.taskName}</Text>
                <TouchableOpacity onPress={() => removeTodo(todosKeys[index])}>
                  <Image
                    source={require('../../images/delete.png')}
                    style={styles.deleteTodo}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {todos.length == 0 && (
        <View style={styles.noTasks}>
          <Image
            source={require('../../images/noTasks.png')}
            style={styles.noTasksImage}
          />
          <Text style={styles.noTasksHere}>No Tasks For You Till Now.</Text>
          <Text style={styles.noTasksHere}>Click + To Create Your Tasks.</Text>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.inputTask}
              numberOfLines={3}
              multiline
              placeholder="Add Your Task .."
              onChangeText={val => setTask(val)}
            />

            <View style={styles.actionsTodo}>
              <Pressable
                disabled={!task || task.length === 0}
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    backgroundColor: '#05b5ba',
                    opacity: !task || task.length === 0 ? 0.5 : 1,
                  },
                ]}
                onPress={addItem}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {backgroundColor: '#f44336'},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={[styles.btnsAddTodo, {textAlign: 'center'}]}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../../images/add.png')}
            style={styles.addTodo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDo;


