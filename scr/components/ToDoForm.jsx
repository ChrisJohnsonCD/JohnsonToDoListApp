import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    // Fetch tasks from tasks.json file
    const fetchTasks = async () => {
      try {
        const response = await fetch('./data/tasks.json');
        const data = await response.json();
        setTasksList(data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array 

  const handleChangeText = (text) => {
    setTask(text);
  };

  const handlePress = () => {
    addTask(task);
    setTask(''); // Clear input after adding task
  };

  const handleRandomTask = () => {
    if (tasksList.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasksList.length);
      const randomTask = tasksList[randomIndex];
      setTask(randomTask);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={handleChangeText}
        value={task}
      />
      <Button title="Add" onPress={handlePress} />
      <Button title="Generate Random Task" onPress={handleRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
